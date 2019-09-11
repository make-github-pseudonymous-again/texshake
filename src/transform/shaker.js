import { StopIteration } from '@aureooms/js-itertools' ;
import { ast } from '@aureooms/js-grammar' ;
import tape from '@aureooms/js-tape' ;

import visitor from './visitor' ;

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

async function parseDefinitionParameters ( parameters ) {
  let nargs = 0;
  let dfltarg = null;
  if (parameters.production === 'yes') {
    const it2 = iter(parameters.children);
    await next(it2) ; // [
    const digit = await next(it2) ;
    nargs = parseInt(digit.buffer, 10);
    await next(it2) ; // ]

    const dfltparam = await next(it2) ;
    if ( dfltparam.production === 'yes' ) {
      const it3 = iter(dfltparam.children);
      await next(it3) ; // [
      const anything3 = await next(it3);
      dfltarg = await ast.materialize(anything3) ;
      await next(it3) ; // ]
    }

  }
  return [ nargs , dfltarg ] ;
}

async function stringifyCommandOrEnvironmentName ( tree ) {
  // TODO tree is anything and needs to be executed
  const flattened = ast.flatten(tree) ;
  let name = '';
  for await ( const leaf of flattened ) name += leaf.buffer ;
  return name ;
}

const commandDefinitionParser = {
  "{cmd}[nargs][default]{anything}": async ( tree ) => {
    const it = iter(tree.children) ;
    await next(it); // {
    const othercmd = await next(it); // cmd
    const cmd = othercmd.buffer;
    await next(it); // }
    const parameters = await next(it); // [nargs][default]
    const [ nargs , dflt ] = await parseDefinitionParameters( parameters ) ;
    await next(it); // {
    const anything = await next(it);
    const blob = await ast.materialize(anything) ; // anything
    await next(it); // }
    return [ cmd , nargs , dflt , blob ] ;
  } ,

  "cmd[nargs][default]{anything}": async ( tree ) => {
    const it = iter(tree.children) ;
    const othercmd = await next(it);
    const cmd = othercmd.buffer;
    const parameters = await next(it); // [nargs][default]
    const [ nargs , dflt ] = await parseDefinitionParameters( parameters ) ;
    await next(it); // {
    const anything = await next(it);
    const blob = await ast.materialize(anything) ;
    await next(it); // }
    return [ cmd , nargs , dflt , blob ] ;
  } ,

  "*cmd[nargs][default]{anything}": async ( tree ) => {
    // do not know what to do with '*' at the moment
    // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
    const it = iter(tree.children) ;
    await next(it); // *
    const othercmd = await next(it);
    const cmd = othercmd.buffer;
    const parameters = await next(it); // [nargs][default]
    const [ nargs , dflt ] = await parseDefinitionParameters( parameters ) ;
    await next(it); // {
    const anything = await next(it);
    const blob = await ast.materialize(anything) ;
    await next(it); // }
    return [ cmd , nargs , dflt , blob ] ;
  } ,
}

function processCommandDefinition ( commands , cmd , definition ) {
  if ( commands.has(cmd) ) {
    throw new Error(`Command ${cmd} is already defined.`);
  }
  else {
    commands.set(cmd, definition);
    return empty;
  }
}

function processCommandRedefinition ( commands , cmd , definition , tree ) {
  if ( commands.has(cmd) ) {
    commands.set(cmd, definition);
    return empty;
  }
  else {
    const renewcommand = {
      'type' : 'leaf' ,
      'terminal' : 'renewcommand' ,
      'buffer' : '\\renewcommand' ,
    } ;

    return {
      'type' : 'node' ,
      'nonterminal' : 'something-else' ,
      'production' : 'renewcommand' ,
      'children' : chain( [
	[
	  renewcommand ,
	  tree ,
	]
      ] ) ,
    } ;
  }
}

function* stringifyDefinitionParameters ( nargs , dfltarg ) {
  if ( nargs > 0 ) {
    yield leftSquareBracket ;
    yield {
      'type': 'leaf',
      'terminal': 'digit',
      'buffer': nargs.toString(),
    } ;
    yield rightSquareBracket ;

    if ( dfltarg ) {
      yield leftSquareBracket ;
      yield dfltarg ;
      yield rightSquareBracket ;
    }
  }
}


const empty = {
  'type' : 'node' ,
  'nonterminal' : 'empty' ,
  'production' : 'main' ,
  'children' : [] ,
} ;

const hash = {
  'type' : 'leaf' ,
  'terminal' : '#' ,
  'buffer' : '#' ,
} ;

const leftSquareBracket = {
  'type' : 'leaf' ,
  'terminal' : '[' ,
  'buffer' : '[' ,
} ;

const rightSquareBracket = {
  'type' : 'leaf' ,
  'terminal' : ']' ,
  'buffer' : ']' ,
} ;

const err = ( nonterminal , production ) => () => {
  throw new Error(`${nonterminal}.${production} should have been handled before`);
} ;

const t = ast.transform ;
const cmap = ast.cmap ;
const m = ( children , match , ctx ) => cmap( async child => await t( child , match , ctx ) , children ) ;

function extend ( transform, extension ) {
  const result = { } ;
  for ( const key in transform ) {
    result[key] = Object.assign({}, transform[key], extension[key]) ;
  }
  return result ;
}

const optimizedVisitor = extend( visitor , {

  "anything" : {
    "end" : () => empty ,
  } ,

  "anything-but-]" : {
    "end" : () => empty ,
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

    "\n" : tree => tree ,

    " " : tree => tree ,

    "digit" : tree => tree ,

    "$" : tree => tree ,

  } ,

  "cmdargs": {
    "end" : () => empty ,
  } ,

  "cmdafter": {
    "nothing" : () => empty ,
  } ,

  "cmdafter-but-not-]": {
    "nothing" : () => empty ,
  } ,

  "endif": {
    "fi" : tree => tree ,
  } ,

} ) ;

const expandArguments = extend( optimizedVisitor , {
  "something-else": {
    "argument": async ( tree , match , { args } ) => {
      const it = iter(tree.children) ;
      await next(it); // #
      const nonterminal = await next(it); // # or digit
      const arg = await next(iter(nonterminal.children)) ;
      if (nonterminal.production === '#') return hash ; // this and next line could be moved one line up
      const i = parseInt(arg.buffer, 10) - 1; // #arg
      if ( i >= args.length ) throw new Error(`Requesting ${arg.buffer} but only got ${args.length} arguments.`) ;
      const subtree = args[i] ;
      return subtree ;
    } ,
  } ,

  "argument-subject" : {
    "#" : err("argument-subject", "#") ,
    "digit" : err("argument-subject", "digit") ,
  } ,

} ) ;

function parseArguments ( args , dfltarg , type , name ) {

  const cmdargs = [];
  let arg_i = args
  if ( arg_i.production === 'optional' ) {
    if (dfltarg === null) throw new Error(`${type} ${name} is not defined with a default argument.`) ;
    const [ optgroup , tail ] = arg_i.children ;
    const [ _open , arg , _close ] = optgroup.children ;
    cmdargs.push(arg);
    arg_i = tail ;
  }
  else if (dfltarg !== null) cmdargs.push(dfltarg) ;
  while ( arg_i.production === 'normal' ) {
    const [ group , tail ] = arg_i.children ;
    const [ _open , arg , _close ] = group.children ;
    cmdargs.push(arg) ;
    arg_i = tail ;
  }
  const complex = arg_i.production === 'optional' ;

  return [ complex , cmdargs ] ;

}

export default extend( optimizedVisitor , {

  "othercmd" : {

    "othercmd": async ( tree , match , ctx ) => {

      const it = iter(tree.children) ;

      const othercmd = await next(it) ;
      let cmd = othercmd.buffer;

      const optstar = await ast.materialize(await next(it));
      if ( optstar.production === 'yes' ) cmd += '*';

      const args = await ast.materialize(await next(it));

      if ( ctx.variables.get('cmd').has(cmd) ) {

	const [ nargs , dfltarg , expandsto ] = ctx.variables.get('cmd').get(cmd) ;

	const [ complex , cmdargs ] = parseArguments( args , dfltarg , 'Command' , cmd ) ;

	if (!complex) {
	  // do not parse complex syntax
	  if (cmdargs.length !== nargs) throw new Error(`Command ${cmd} is defined with ${nargs} arguments but ${cmdargs.length} were given.`) ;

	  const withArguments = await t( expandsto , expandArguments , { args: cmdargs } )
	  const flat = ast.flatten(withArguments) ;
	  const tokensTape = tape.fromAsyncIterable(flat);
	  const subtree = (await ast.materialize(ctx.parser.parse(tokensTape))).children[0] ;
	  return t( subtree , match , ctx ) ;
	}

      }

      return {
	'type' : 'node' ,
	'nonterminal' : 'othercmd' ,
	'production' : 'othercmd' ,
	'children' : chain( [ [ othercmd , optstar ] , m([args], match, ctx) ] ) ,
      } ;

    } ,

  } ,

  "begin-environment" : {

    "begin-environment": async ( tree , match , ctx ) => {

      const it = iter(tree.children) ;

      const begincmd = await next(it) ; // \begin
      const leftbracket = await next(it) ; // {
      const envtext = await next(it) ;
      const env = envtext.buffer ;
      const rightbracket = await next(it) ; // }

      const args = await ast.materialize(await next(it));

      const envStackEntry = { env , expand: false, children: []} ;
      ctx.env.push(envStackEntry) ;

      if ( ctx.variables.get('env').has(env) ) {

	const [ nargs , dfltarg , begin , end ] = ctx.variables.get('env').get(env) ;

	const [ complex , cmdargs ] = parseArguments( args , dfltarg , 'Environment' , env ) ;

	if (!complex) {
	  envStackEntry.expand = true ;
	  envStackEntry.args = cmdargs ;
	  // do not parse complex syntax
	  if (cmdargs.length !== nargs)
	    throw new Error(`Environment ${env} is defined with ${nargs} arguments but ${cmdargs.length} were given.`) ;

	  const withArguments = await t( begin , expandArguments , { args: cmdargs } )
	  const flat = ast.flatten(withArguments) ;
	  const tokensTape = tape.fromAsyncIterable(flat);
	  const subtree = (await ast.materialize(ctx.parser.parse(tokensTape))).children[0] ;
	  return t( subtree , match , { env: envStackEntry.children , variables: ctx.variables , parser: ctx.parser } ) ;
	}

      }

      return {
	'type' : 'node' ,
	'nonterminal' : 'begin-environment' ,
	'production' : 'begin-environment' ,
	'children' : chain( [ [ begincmd , leftbracket , envtext , rightbracket ] , m([args], match, ctx) ] ) ,
      } ;

    } ,

  } ,

  "end-environment" : {

    "end-environment": async ( tree , match , ctx ) => {

      const it = iter(tree.children) ;

      const endcmd = await next(it) ; // \end
      const leftbracket = await next(it) ; // {
      const envtext = await next(it) ;
      const env = envtext.buffer ;
      const rightbracket = await next(it) ; // }

      if ( ctx.env.length === 0 ) {
	throw new Error(`Trying to end environment on an empty stack with \\end{${env}} (matching \\begin{${env}} is missing).`);
      }

      const { expand , env: currentEnv , children , args: cmdargs } = ctx.env.pop();

      if ( currentEnv !== env ) {
	throw new Error(`Trying to match \\begin{${currentEnv}} with \\end{${env}}.`);
      }
      else if (expand) {
	const [ nargs , defaultarg , begin , end ] = ctx.variables.get('env').get(env) ;
	const withArguments = await t( end , expandArguments , { args: cmdargs } )
	const flat = ast.flatten(withArguments) ;
	const tokensTape = tape.fromAsyncIterable(flat);
	const subtree = (await ast.materialize(ctx.parser.parse(tokensTape))).children[0] ;
	return t( subtree , match , { env: children , variables: ctx.variables , parser: ctx.parser } ) ;
      }
      else {
	return {
	  'type' : 'node' ,
	  'nonterminal' : 'end-environment' ,
	  'production' : 'end-environment' ,
	  'children' : chain( [ [ endcmd , leftbracket , envtext , rightbracket ] ] ) ,
	} ;
      }
    } ,

  } ,

  "something-else" : {

    "newif": () => empty ,

    "comment": ( ) => ({
      'type' : 'leaf' ,
      'terminal' : 'comment' ,
      'buffer' : '%' ,
    }) ,

    "ifcmd": async ( tree , match , ctx ) => {

      const it = iter(tree.children) ;

      const ifcmd = await next(it) ; // \if...
      const variable = ifcmd.buffer.substr(3);

      if (ctx.variables.get('if').has(variable)) {
	const flag = ctx.variables.get('if').get(variable);
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
      ctx.variables.get('if').set(variable, false);
      return empty;
    } ,

    "truecmd" : async ( tree , _ , ctx ) => {
      const truecmd = await next(iter(tree.children)) ;
      const buffer = truecmd.buffer;
      const variable = buffer.substring(1, buffer.length-4);
      ctx.variables.get('if').set(variable, true);
      return empty;
    } ,

    "def": async ( tree , match , { variables } ) => {
      const it = iter(tree.children) ;
      await next(it) ; // \def
      const othercmd = await next(it);
      const cmd = othercmd.buffer ;
      await next(it) ; // {
      const anything = await next(it) ;
      const blob = await ast.materialize(anything) ;
      variables.get('cmd').set(cmd, [0, null, blob]);
      await next(it) ; // }
      return empty ;
    } ,

    "newcommand": async ( tree , match , ctx ) => {
      const it = iter(tree.children) ;
      await next(it) ; // \newcommand
      const cmddef = await next(it) ;
      return t( cmddef , match , ctx ) ;
    } ,

    "renewcommand": async ( tree , match , ctx ) => {
      const it = iter(tree.children) ;
      await next(it) ; // \renewcommand
      const cmddef = await next(it) ;
      return t( cmddef , match , ctx ) ;
    } ,

    "newenvironment": async ( tree , match , ctx ) => {
      const it = iter(tree.children) ;
      await next(it) ; // \newenvironment
      const envdef = await next(it) ;
      return t( envdef , match , ctx ) ;
    } ,

    "renewenvironment": async ( tree , match , ctx ) => {
      const it = iter(tree.children) ;
      await next(it) ; // \renewenvironment
      const envdef = await next(it) ;
      return t( envdef , match , ctx ) ;
    } ,

  } ,

  "argument-subject" : {
    "#" : () => {
      throw new Error('Escaped hash (##) without argument context.') ;
    } ,
    "digit" : async tree => {
      const digit = await next(iter(tree.children)) ;
      throw new Error(`Requesting #${digit.buffer} without argument context.`) ;
    } ,
  } ,

  "command-definition" : {

    "{cmd}[nargs][default]{anything}": async ( tree , _ , { variables } ) => {
      tree = await ast.materialize(tree);
      const [ cmd , nargs , dflt , blob ] = await commandDefinitionParser["{cmd}[nargs][default]{anything}"](tree) ;
      return processCommandDefinition( variables.get('cmd') , cmd, [ nargs , dflt ,blob ]);
    } ,

    "cmd[nargs][default]{anything}": async ( tree , _ , { variables } ) => {
      tree = await ast.materialize(tree);
      const [ cmd , nargs , dflt , blob ] = await commandDefinitionParser["cmd[nargs][default]{anything}"](tree) ;
      return processCommandDefinition( variables.get('cmd') , cmd, [ nargs , dflt ,blob ]);
    } ,

    "*cmd[nargs][default]{anything}": async ( tree , _ , { variables } ) => {
      // do not know what to do with '*' at the moment
      // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
      tree = await ast.materialize(tree);
      const [ cmd , nargs , dflt , blob ] = await commandDefinitionParser["*cmd[nargs][default]{anything}"](tree) ;
      return processCommandDefinition( variables.get('cmd') , cmd, [ nargs , dflt ,blob ]);
    } ,

  } ,

  "command-redefinition" : {

    "{cmd}[nargs][default]{anything}": async ( tree , _ , { variables } ) => {
      tree = await ast.materialize(tree);
      const [ cmd , nargs , dflt , blob ] = await commandDefinitionParser["{cmd}[nargs][default]{anything}"](tree) ;
      return processCommandRedefinition( variables.get('cmd') , cmd , [nargs , dflt , blob], tree ) ;
    } ,

    "cmd[nargs][default]{anything}": async ( tree , _ , { variables } ) => {
      tree = await ast.materialize(tree);
      const [ cmd , nargs , dflt , blob ] = await commandDefinitionParser["cmd[nargs][default]{anything}"](tree) ;
      return processCommandRedefinition( variables.get('cmd') , cmd , [nargs , dflt , blob], tree ) ;
    } ,

    "*cmd[nargs][default]{anything}": async ( tree , _ , { variables } ) => {
      tree = await ast.materialize(tree);
      const [ cmd , nargs , dflt , blob ] = await commandDefinitionParser["*cmd[nargs][default]{anything}"](tree) ;
      return processCommandRedefinition( variables.get('cmd') , cmd , [nargs , dflt , blob], tree ) ;
    } ,

  } ,

  "environment-definition" : {
    "{envname}[nargs][default]{begin}{end}" :  async ( tree , _ , { variables } ) => {
      // do not know what to do with '*' at the moment
      // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
      const it = iter(tree.children) ;
      //await next(it); // *
      await next(it); // {
      const envnameanything = await next(it);
      const env = await stringifyCommandOrEnvironmentName(envnameanything) ;
      await next(it); // }
      await next(it); // ignore
      const parameters = await next(it); // [nargs][default]
      const [ nargs , dflt ] = await parseDefinitionParameters( parameters ) ;
      await next(it); // {
      const anything1 = await next(it);
      const begin = await ast.materialize(anything1) ;
      await next(it); // }
      await next(it); // ignore
      await next(it); // {
      const anything2 = await next(it);
      const end = await ast.materialize(anything2) ;
      await next(it); // }
      variables.get('env').set(env, [ nargs , dflt , begin , end ]);
      return empty;
    } ,
  } ,
  "environment-redefinition" : {
    "{envname}[nargs][default]{begin}{end}" :  async ( tree , _ , { variables } ) => {
      // do not know what to do with '*' at the moment
      // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
      const it = iter(tree.children) ;
      //await next(it); // *
      const leftbracket1 = await next(it); // {
      const envnameanything = await next(it);
      const env = await stringifyCommandOrEnvironmentName(envnameanything) ;
      const rightbracket1 = await next(it); // }
      const ignore1 = await next(it); // ignore
      const parameters = await next(it); // [nargs][default]
      const [ nargs , dflt ] = await parseDefinitionParameters( parameters ) ;
      const leftbracket2 = await next(it); // {
      const anything2 = await next(it);
      const begin = await ast.materialize(anything2) ;
      const rightbracket2 = await next(it); // }
      const ignore2 = await next(it); // ignore
      const leftbracket3 = await next(it); // {
      const anything3 = await next(it);
      const end = await ast.materialize(anything3) ;
      const rightbracket3 = await next(it); // }
      variables.get('env').delete(env);

      const renewenvironment = {
	'type' : 'leaf' ,
	'terminal' : 'renewenvironment' ,
	'buffer' : '\\renewenvironment' ,
      } ;

      const envname = {
	'type' : 'leaf' ,
	'terminal' : 'text' ,
	'buffer' : env ,
      } ;

      return {
	'type' : 'node' ,
	'nonterminal' : 'environment-redefinition' ,
	'production' : '{envname}[nargs][default]{begin}{end}' ,
	'children' : chain( [
	  [
	    renewenvironment ,
	    leftbracket1 ,
	    envname ,
	    rightbracket1 ,
	    ignore1 ,
	  ] ,
	  stringifyDefinitionParameters(nargs, dflt) ,
	  [
	    leftbracket2 ,
	    begin ,
	    rightbracket2 ,
	    ignore2 ,
	    leftbracket3 ,
	    end ,
	    rightbracket3 ,
	  ]
	] ) ,
      } ;
    } ,
  } ,
  "definition-parameters" : {
    "yes" : err('definition-parameters' , 'yes' ) ,
    "no" : err('definition-parameters' , 'no' ) ,
  } ,
  "default-argument-for-definition" : {
    "yes" : err('default-argument-for-definition' , 'yes' ) ,
    "no" : err('default-argument-for-definition' , 'no' ) ,
  } ,

  "cmd*": {
    "yes" : err( "cmd*" , "yes" ) ,
    "no" : err( "cmd*" , "no" ) ,
  } ,

  "ignore" : {
    "starts-with-a-space" : err('ignore', 'starts-with-a-space') ,
    "starts-with-a-newline" : err('ignore', 'starts-with-a-newline') ,
    "starts-with-a-comment" : err('ignore', 'starts-with-a-comment') ,
    "nothing" : err('ignore', 'nothing') ,
  } ,

} ) ;
