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

export const shake = {

  "blocks" : {

    "add" : ( tree , match , ctx ) => ({
      "type" : "node" ,
      "nonterminal" : "blocks" ,
      "production" : "add" ,
      "children" : m( tree.children , match , ctx ) ,
    }) ,

    "end" : () => empty ,

  } ,

  "block" : {

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
	'nonterminal' : 'block' ,
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

    "othercmd": ( tree , match , ctx ) => {
      const [ othercmd , optstar , optargs , args ] = tree.children ;
      let cmd = othercmd.buffer;
      if ( optstar.production === 'yes' ) cmd += '*';
      const hasoptargs = optargs.production === 'yes' ;
      const cmdargs = [];
      let arg_i = args
      while ( arg_i.production === 'add' ) {
	const [ _open , arg , _close , argstail ] = arg_i.children ;
	cmdargs.push(arg) ;
	arg_i = argstail ;
      }
      if (!hasoptargs && ctx.variables.has(cmd)) {
	// too hard to parse opt args currently
	const [ nargs , expandsto ] = ctx.variables.get(cmd) ;
	if (cmdargs.length !== nargs) throw new Error(`Command ${cmd} is defined with ${nargs} arguments but ${cmdargs.length} were given.`) ;
	return t( expandsto , match , { variables: ctx.variables , args: [ ctx.args , cmdargs ] } ) ;
      }
      else return {
	'type' : 'node' ,
	'nonterminal' : 'block' ,
	'production' : 'othercmd' ,
	'children' : chain( [ [ othercmd , optstar ] , m([optargs, args], match, ctx) ] ) ,
      } ;
    } ,

    "def": ( tree , match , { variables } ) => {
      const [ def , othercmd , _2 , blocks , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      variables.set(cmd, [0, ast.materialize(blocks)]);
      return empty ;
    } ,

    "newcommand": ( tree , match , ctx ) => {
      const [ newcommand , cmddef ] = tree.children ;
      return t( cmddef , match , ctx ) ;
    } ,

    "{blocks}": ( tree , match , ctx ) => {
      const [ _open , blocks , _close ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : "block" ,
	"production" : "{blocks}" ,
	"children" : chain( [ [ _open ] , m( [ blocks ] , match , ctx ) , [ _close ] ] ) ,
      } ;
    } ,

    "[blocks]": ( tree , match , ctx ) => {
      const [ _open , blocks , _close ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : "block" ,
	"production" : "{blocks}" ,
	"children" : chain( [ [ _open ] , m( [ blocks ] , match , ctx ) , [ _close ] ] ) ,
      } ;
    } ,

    "*" : tree => tree ,

    "arg": ( tree , match , { args , variables } ) => {
      const [ arg ] = tree.children ;
      const i = parseInt(arg.buffer.substr(1), 10) - 1; // #arg
      if ( i >= args[1].length ) throw new Error(`Requesting ${arg} but only got ${args[1].length} arguments.`) ;
      const subtree = args[1][i] // arg
      return t( subtree , match , { args: args[0] , variables } ) ;
    } ,

  } ,

  "endif": {

    "elsefi" : ( tree , match , ctx ) => {
      const [ _else , blocks , _fi ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : "endif" ,
	"production" : "fi" ,
	"children" : chain([ [ _else ] , m( [ blocks ] , match , ctx ) , [ _fi ] ] ) ,
      } ;
    } ,

    "fi" : ( ) => ({
      "type" : "leaf" ,
      "terminal" : "text" ,
      "buffer" : '\\fi' ,
    }) ,

  } ,

  "cmddef" : {

    "{cmd}[x]{blocks}": ( tree , _ , { variables } ) => {
      const [ _0 , othercmd , _1 , cmddefargs , _2 , blocks , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const [ _4 , text , _5 ] = cmddefargs.children ;
	nargs = parseInt(text.buffer, 10);
      }
      variables.set(cmd, [ nargs , blocks ]);
      return empty;
    } ,

    "cmd[x]{blocks}": ( tree , _ , { variables } ) => {
      const [ othercmd , cmddefargs , _2 , blocks , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const [ _4 , text , _5 ] = cmddefargs.children ;
	nargs = parseInt(text.buffer, 10);
      }
      variables.set(cmd, [ nargs , blocks ]);
      return empty;
    } ,

    "*cmd[x]{blocks}": ( tree , _ , { variables } ) => {
      // do not know what to do with '*' at the moment
      const [ _1 , othercmd , cmddefargs , _2 , blocks , _3 ] = tree.children ;
      const cmd = othercmd.buffer;
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const [ _4 , text , _5 ] = cmddefargs.children ;
	nargs = parseInt(text.buffer, 10);
      }
      variables.set(cmd, [ nargs , blocks ]);
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

  "cmdoptargs": {
    "yes" : ( tree , match , ctx ) => shake['block']['[blocks]']( tree , match , ctx ),
    "no" : () => empty ,
  } ,

  "cmdargs": {
    "add" : ( tree , match , ctx ) => {
      const [ _open , blocks , _close , tail ] = tree.children ;
      return {
	"type" : "node" ,
	"nonterminal" : "block" ,
	"production" : "{blocks}" ,
	"children" : chain( [ [ _open ] , m( [ blocks ] , match , ctx ) , [ _close ] , m( [ tail ] , match , ctx ) ] ) ,
      } ;
    } ,
    "end" : () => empty ,
  } ,

} ;
