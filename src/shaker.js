import { StopIteration } from '@aureooms/js-itertools' ;
import { ast } from '@aureooms/js-grammar' ;

// TODO create library with those
function iter ( object ) {
  // maybe we do not even need the second case
  if ( object[Symbol.asyncIterator] ) return object[Symbol.asyncIterator]() ;
  else return object[Symbol.iterator]() ;
}

// TODO create library with those
async function next ( iterator , dflt = undefined ) {

  const x = await iterator.next( ) ;

  if ( x.done ) {
    if ( dflt === undefined ) throw new StopIteration() ;
    else return dflt ;
  }

  return x.value ;

}

async function* chain ( iterables ) {

  for ( const iterable of iterables ) {
    if ( iterable[Symbol.iterator] ) yield* iterable ;
    else for await ( const item of iterable ) yield item ;
  }

}


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
const m = ( children , match , ctx ) => ast.cmap( async child => await t( child , match , ctx ) , children ) ;

const recurse = ( nonterminal , production ) => ( tree , match , ctx ) => ({
  "type" : "node" ,
  nonterminal ,
  production ,
  "children" : ast.cmap( async x => x.type === 'leaf' ? x : await t( x , match , ctx ) , tree.children ) ,
}) ;


export default {

  "document" : {
    "contents" : recurse( 'document' , 'contents' ) ,
  } ,

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
    "group" : recurse('group', 'group') ,
  } ,

  "optgroup" : {
    "group" : recurse('optgroup', 'group') ,
  } ,

  "othercmd" : {

    "othercmd": async ( tree , match , ctx ) => {

      const it = iter(tree.children) ;

      const othercmd = await next(it) ;
      let cmd = othercmd.buffer;

      const optstar = await ast.materialize(await next(it));
      if ( optstar.production === 'yes' ) cmd += '*';

      const args = await ast.materialize(await next(it));
      const cmdargs = [];
      let arg_i = args
      while ( arg_i.production === 'normal' ) {
	const [ group , tail ] = arg_i.children ;
	const [ _open , arg , _close ] = group.children ;
	cmdargs.push(arg) ;
	arg_i = tail ;
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

    "ifcmd": async ( tree , match , ctx ) => {

      const it = iter(tree.children) ;

      const ifcmd = await next(it) ; // \if...
      const variable = ifcmd.buffer.substr(3);

      if (ctx.variables.has(variable)) {
	const flag = ctx.variables.get(variable);
	const block1 = await next(it) ;
	if (flag) return t( block1 , match , ctx ) ;
	else {
	  const endif = await ast.materialize(await next(it)) ;
	  if ( endif.production === "elsefi" ) {
	    const [ _else , block2 , _fi ] = endif.children ;
	    return t( block2 , match , ctx ) ;
	  }
	  else return empty ;
	}
      }

      return {
	'type' : 'node' ,
	'nonterminal' : 'something-else' ,
	'production' : 'ifcmd' ,
	'children' : chain( [ [ ifcmd ] , m( it , match , ctx ) ] ) ,
      } ;

    } ,

    "falsecmd" : async ( tree , _ , ctx ) => {
      const falsecmd = await next(iter(tree.children)) ;
      const buffer = falsecmd.buffer;
      const variable = buffer.substring(1, buffer.length-5);
      ctx.variables.set(variable, false);
      return empty;
    } ,

    "truecmd" : async ( tree , _ , ctx ) => {
      const truecmd = await next(iter(tree.children)) ;
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

    "def": async ( tree , match , { variables } ) => {
      const it = iter(tree.children) ;
      await next(it) ; // \def
      const othercmd = await next(it);
      const cmd = othercmd.buffer ;
      await next(it) ; // {
      const anything = await next(it) ;
      const blob = await ast.materialize(anything) ;
      variables.set(cmd, [0, blob]);
      await next(it) ; // }
      return empty ;
    } ,

    "newcommand": async ( tree , match , ctx ) => {
      const it = iter(tree.children) ;
      await next(it) ; // \newcommand
      const cmddef = await next(it) ;
      return t( cmddef , match , ctx ) ;
    } ,

    "\n" : tree => tree ,

    "arg": async ( tree , match , { args , variables } ) => {
      const arg = await next(iter(tree.children)) ;
      if ( args.length < 2 ) throw new Error(`Requesting ${arg.buffer} but got no arguments in context.`) ;
      const i = parseInt(arg.buffer.substr(1), 10) - 1; // #arg
      if ( i >= args[1].length ) throw new Error(`Requesting ${arg.buffer} but only got ${args[1].length} arguments.`) ;
      const subtree = args[1][i] ; // arg
      return t( subtree , match , { args: args[0] , variables } ) ;
    } ,

    "$" : tree => tree ,

    "math" : recurse('something-else', 'math') ,
    "mathenv" : recurse('something-else', 'mathenv') ,

  } ,

  "endif": {
    "elsefi" : recurse( 'endif', 'elsefi' ) ,
    "fi" : tree => tree ,
  } ,

  "cmddef" : {

    "{cmd}[x]{anything}": async ( tree , _ , { variables } ) => {
      const it = iter(tree.children) ;
      await next(it); // {
      const othercmd = await next(it);
      const cmd = othercmd.buffer;
      await next(it); // }
      const cmddefargs = await next(it);
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const it2 = iter(cmddefargs.children);
	await next(it2) ; // [
	const text = await next(it2) ;
	nargs = parseInt(text.buffer, 10);
	await next(it2) ; // ]
      }
      await next(it); // {
      const anything = await next(it);
      const blob = await ast.materialize(anything) ;
      variables.set(cmd, [ nargs , blob ]);
      await next(it); // }
      return empty;
    } ,

    "cmd[x]{anything}": async ( tree , _ , { variables } ) => {
      const it = iter(tree.children) ;
      const othercmd = await next(it);
      const cmd = othercmd.buffer;
      const cmddefargs = await next(it);
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const it2 = iter(cmddefargs.children);
	await next(it2) ; // [
	const text = await next(it2) ;
	nargs = parseInt(text.buffer, 10);
	await next(it2) ; // ]
      }
      await next(it); // {
      const anything = await next(it);
      const blob = await ast.materialize(anything) ;
      variables.set(cmd, [ nargs , blob ]);
      await next(it); // }
      return empty;
    } ,

    "*cmd[x]{anything}": async ( tree , _ , { variables } ) => {
      // do not know what to do with '*' at the moment
      const it = iter(tree.children) ;
      await next(it); // *
      const othercmd = await next(it);
      const cmd = othercmd.buffer;
      const cmddefargs = await next(it);
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
	const it2 = iter(cmddefargs.children);
	await next(it2) ; // [
	const text = await next(it2) ;
	nargs = parseInt(text.buffer, 10);
	await next(it2) ; // ]
      }
      await next(it); // {
      const anything = await next(it);
      const blob = await ast.materialize(anything) ;
      variables.set(cmd, [ nargs , blob ]);
      await next(it); // }
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
