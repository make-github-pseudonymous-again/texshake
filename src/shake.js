import { chain } from '@aureooms/js-itertools' ;
import { ast } from '@aureooms/js-grammar' ;

const empty = {
  'type' : 'node' ,
  'nonterminal' : 'empty' ,
  'production' : 'main' ,
  'children' : [] ,
} ;

const err = ( nonterminal , production ) => () => {
  throw new Error(`${nonterminal}.${production} should have been handled before`);
} ;

const t = ast.transform ;
const m = ( children , match , ctx ) => ast.cmap( child => t( child , match , ctx ) , children ) ;

const recurse = ( nonterminal , production ) => ( tree , match , ctx ) => ({
  "type" : "node" ,
  nonterminal ,
  production ,
  "children" : m( tree.children , match , ctx ) ,
}) ;


export const shake = {

  "anything" : {
    "starts-with-othercmd" : recurse( 'anything' , 'starts-with-othercmd' ) ,
    "starts-with-*" : recurse( 'anything' , 'starts-with-*' ) ,
    "starts-with-[" : recurse( 'anything' , 'starts-with-[' ) ,
    "starts-with-]" : recurse( 'anything' , 'starts-with-]' ) ,
    "starts-with-a-group" : recurse( 'anything' , 'starts-with-a-group' ) ,
    "starts-with-something-else" : recurse( 'anything' , 'starts-with-something-else' ) ,
    "end" : () => empty ,
  } ,

  "anything-but-]" : {
    "starts-with-othercmd" : recurse( 'anything-but-]' , 'starts-with-othercmd' ) ,
    "starts-with-*" : recurse( 'anything' , 'starts-with-*' ) ,
    "starts-with-[" : recurse( 'anything' , 'starts-with-[' ) ,
    "starts-with-a-group" : recurse( 'anything-but-]' , 'starts-with-a-group' ) ,
    "starts-with-something-else" : recurse( 'anything-but-]' , 'starts-with-something-else' ) ,
    "end" : () => empty ,
  } ,

  "group" : {
    "group" : ( tree , match , ctx ) => {
      const [ _open , anything , _close ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : "group" ,
	"production" : "group" ,
	"children" : chain( [ [ _open ] , m( [ anything ] , match , ctx ) , [ _close ] ] ) ,
      } ;
    } ,
  } ,

  "optgroup" : {
    "group" : ( tree , match , ctx ) => {
      const [ _open , anything , _close ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : "optgroup" ,
	"production" : "group" ,
	"children" : chain( [ [ _open ] , m( [ anything ] , match , ctx ) , [ _close ] ] ) ,
      } ;
    } ,
  } ,

  "othercmd" : {

    "othercmd": ( tree , match , ctx ) => {
      const [ othercmd , optstar , args ] = tree.children ;
      let cmd = othercmd.buffer;
      if ( optstar.production === 'yes' ) cmd += '*';
      const cmdargs = [];
      let arg_i = args
      while ( arg_i.production === 'normal' ) {
	const [ group , argstail ] = arg_i.children ;
	const [ _open , arg , _close ] = group.children ;
	cmdargs.push(arg) ;
	arg_i = argstail ;
      }
      const hasoptargs = arg_i.production === 'optional' ;
      if (!hasoptargs && ctx.variables.has(cmd)) {
	// too hard to parse opt args currently
	const [ nargs , expandsto ] = ctx.variables.get(cmd) ;
	if (cmdargs.length !== nargs) throw new Error(`Command ${cmd} is defined with ${nargs} arguments but ${cmdargs.length} were given.`) ;
	return t( expandsto , match , { variables: ctx.variables , args: [ ctx.args , cmdargs ] } ) ;
      }
      else return {
	'type' : 'node' ,
	'nonterminal' : 'othercmd' ,
	'production' : 'othercmd' ,
	'children' : chain( [ [ othercmd , optstar ] , m([args], match, ctx) ] ) ,
      } ;
    } ,

  } ,

  "*" : {
    "*" : tree => tree ,
  } ,

  "[" : {
    "[" : tree => tree ,
  } ,

  "]" : {
    "]" : tree => tree ,
  } ,

  "something-else" : {

    "text" : tree => tree ,

    "newif": () => empty ,

    "ifcmd": ( tree , match , ctx ) => {

      const [ ifcmd , block1 , endif ] = tree.children ;
      const variable = ifcmd.buffer.substr(3);

      if (ctx.variables.has(variable)) {
	const flag = ctx.variables.get(variable);
	if (flag) return t( block1 , match , ctx ) ;
	else if ( endif.production === "elsefi" ) {
	  const [ _else , block2 , _fi ] = endif.children ;
	  return t( block2 , match , ctx ) ;
	}
	else return empty ;
      }

      return {
	'type' : 'node' ,
	'nonterminal' : 'something-else' ,
	'production' : 'ifcmd' ,
	'children' : chain( [ [ ifcmd ] , m( [block1, endif] , match , ctx ) ] ) ,
      } ;

    } ,

    "falsecmd" : ( tree , _ , ctx ) => {
      const [ falsecmd ] = tree.children ;
      const buffer = falsecmd.buffer;
      const variable = buffer.substring(1, buffer.length-5);
      ctx.variables.set(variable, false);
      return empty;
    } ,

    "truecmd" : ( tree , _ , ctx ) => {
      const [ truecmd ] = tree.children ;
      const buffer = truecmd.buffer;
      const variable = buffer.substring(1, buffer.length-4);
      ctx.variables.set(variable, true);
      return empty;
    } ,

    "comment": ( ) => ({
      'type' : 'leaf' ,
      'terminal' : 'comment' ,
      'buffer' : '%' ,
    }) ,

    "def": ( tree , match , { variables } ) => {
      const [ def , othercmd , _2 , anything , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      variables.set(cmd, [0, ast.materialize(anything)]);
      return empty ;
    } ,

    "newcommand": ( tree , match , ctx ) => {
      const [ newcommand , cmddef ] = tree.children ;
      return t( cmddef , match , ctx ) ;
    } ,

    " " : tree => tree ,
    "\t" : tree => tree ,
    "\n" : tree => tree ,

    "arg": ( tree , match , { args , variables } ) => {
      const [ arg ] = tree.children ;
      const i = parseInt(arg.buffer.substr(1), 10) - 1; // #arg
      if ( i >= args[1].length ) throw new Error(`Requesting ${arg} but only got ${args[1].length} arguments.`) ;
      const subtree = args[1][i] ; // arg
      return t( subtree , match , { args: args[0] , variables } ) ;
    } ,

    "$" : tree => tree ,

    "math" : ( tree , match , ctx ) => {
      const [ _open , anything , _close ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : 'something-else' ,
	"production" : "math" ,
	"children" : chain( [ [ _open ] , m( [ anything ] , match , ctx ) , [ _close ] ] ) ,
      } ;
    } ,

    "mathenv" : ( tree , match , ctx ) => {
      const [ _open , anything , _close ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : 'something-else' ,
	"production" : "mathenv" ,
	"children" : chain( [ [ _open ] , m( [ anything ] , match , ctx ) , [ _close ] ] ) ,
      } ;
    } ,

  } ,

  "endif": {

    "elsefi" : ( tree , match , ctx ) => {
      const [ _else , anything , _fi ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : "endif" ,
	"production" : "elsefi" ,
	"children" : chain([ [ _else ] , m( [ anything ] , match , ctx ) , [ _fi ] ] ) ,
      } ;
    } ,

    "fi" : ( ) => ({ // tree => tree ?
      "type" : "leaf" ,
      "terminal" : "text" ,
      "buffer" : '\\fi' ,
    }) ,

  } ,

  "cmddef" : {

    "{cmd}[x]{anything}": ( tree , _ , { variables } ) => {
      const [ _0 , othercmd , _1 , cmddefargs , _2 , anything , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const [ _4 , text , _5 ] = cmddefargs.children ;
	nargs = parseInt(text.buffer, 10);
      }
      variables.set(cmd, [ nargs , anything ]);
      return empty;
    } ,

    "cmd[x]{anything}": ( tree , _ , { variables } ) => {
      const [ othercmd , cmddefargs , _2 , anything , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const [ _4 , text , _5 ] = cmddefargs.children ;
	nargs = parseInt(text.buffer, 10);
      }
      variables.set(cmd, [ nargs , anything ]);
      return empty;
    } ,

    "*cmd[x]{anything}": ( tree , _ , { variables } ) => {
      // do not know what to do with '*' at the moment
      const [ _1 , othercmd , cmddefargs , _2 , anything , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const [ _4 , text , _5 ] = cmddefargs.children ;
	nargs = parseInt(text.buffer, 10);
      }
      variables.set(cmd, [ nargs , anything ]);
      return empty;
    } ,

  } ,

  "cmddefargs": {
    "yes" : err( "cmddefargs" , "yes" ) ,
    "no" : err( "cmddefargs" , "no" ) ,
  } ,

  "cmd*": {
    "yes" : err( "cmd*" , "yes" ) ,
    "no" : err( "cmd*" , "no" ) ,
  } ,

  "cmdargs": {
    "normal" : recurse('cmdargs', 'normal') ,
    "optional" : recurse('cmdargs', 'optional') ,
    "end" : () => empty ,
  } ,

  "cmdafter": {
    "othercmd" : recurse('cmdafter', 'othercmd' ) ,
    "something-else-then-anything" : recurse('cmdafter', 'something-else-then-anything' ) ,
    "]-then-anything" : recurse('cmdafter', ']-then-anything' ) ,
    "nothing" : () => empty ,
  } ,

  "cmdafter-but-not-]": {
    "othercmd" : recurse('cmdafter-but-not-]', 'othercmd' ) ,
    "something-else-then-anything" : recurse('cmdafter-but-not-]', 'something-else-then-anything' ) ,
    "nothing" : () => empty ,
  } ,

} ;
