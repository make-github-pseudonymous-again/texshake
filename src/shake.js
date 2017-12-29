export function shake ( out , tree , variables , args ) {

  let variable , buffer , cmd , nargs , expandsto ;

  while ( tree.nonterminal === 0 ) {
    // eliminate expensive tail-recursion
    if ( tree.production.id === 1 ) return ;
    shake( out , tree.children[0] , variables , args ) ; // 1
    tree = tree.children[1]; // 0
  }

  switch ( tree.nonterminal ) {
    case 1:
      switch ( tree.production.id ) {
	case 0:
	  out.write(tree.children[0].buffer); // text
	  break;
	case 1:
	  // newif
	  // ifcmd
	  break;
	case 2:
	  variable = tree.children[0].buffer.substr(3); // ifcmd
	  const flag = variables.get(variable);
	  if (flag) shake(out, tree.children[1] , variables , args) ;
	  else if ( tree.children[2].production.id === 0 ) {
	    // else
	    shake(out, tree.children[2].children[1] , variables , args) ;
	  }
	  // fi
	  break;
	case 3:
	  buffer = tree.children[0].buffer; // falsecmd
	  variable = buffer.substring(1,buffer.length-5);
	  variables.set(variable, false);
	  break;
	case 4:
	  buffer = tree.children[0].buffer; // truecmd
	  variable = buffer.substring(1,buffer.length-4);
	  variables.set(variable, true);
	  break;
	case 5:
	  out.write('%'); // comment
	  break;
	case 6:
	  cmd = tree.children[0].buffer; // othercmd
	  if ( tree.children[1].production.id === 0 ) cmd += '*';
	  const optargsnode = tree.children[2];
	  const hasoptargs = optargsnode.production.id === 0 ;
	  let argsnode = tree.children[3] ;
	  const cmdargs = [];
	  while ( argsnode.production.id === 0 ) {
	    // {
	    cmdargs.push(argsnode.children[1]) ;
	    // }
	    argsnode = argsnode.children[3];
	  }
	  if (!hasoptargs && variables.has(cmd)) { // too hard to parse opt args currently
	    [ nargs , expandsto ] = variables.get(cmd) ;
	    if (cmdargs.length !== nargs) throw new Error('nargs does not match') ;
	    shake(out, expandsto, variables, [ args , cmdargs ] );
	  }
	  else {
	    out.write(cmd);
	    if (hasoptargs) {
	      out.write('[');
	      shake(out, optargsnode.children[1], variables, args);
	      out.write(']');
	    }
	    for ( const subtree of cmdargs ) {
	      out.write('{');
	      shake(out, subtree, variables, args);
	      out.write('}');
	    }
	  }
	  break;
	case 7:
	  // def
	  cmd = tree.children[1].buffer; // othercmd
	  // {
	  variables.set(cmd, [0, tree.children[3]]);
	  // }
	  break;
	case 8:
	  // newcommand
	  shake( out , tree.children[1] , variables , args) ;
	  break;
	case 9:
	  out.write('{'); // {
	  shake( out , tree.children[1] , variables , args) ;
	  out.write('}'); // }
	  break;
	case 10:
	  out.write('['); // [
	  shake( out , tree.children[1] , variables , args) ;
	  out.write(']'); // ]
	  break;
	case 11:
	  out.write('*'); // *
	  break;
	case 12:
	  //throw new Error('Should never reach case 1.12 because handled before.');
	  const i = parseInt(tree.children[0].buffer.substr(1), 10) - 1; // arg
	  if ( i >= args[1].length ) throw new Error('shake 1.12: not enough arguments') ;
	  const subtree = args[1][i] // arg
	  shake(out, subtree, variables, args[0]);
	  break;
      }
      break;
    case 2:
      throw new Error('Should never reach case 2 because handled before.');
    case 3:
      switch ( tree.production.id ) {
	case 0:
	  // {
	  cmd = tree.children[1].buffer; // othercmd
	  // }
	  nargs = 0;
	  if (tree.children[3].production.id === 0) {
	    // [
	    nargs = parseInt(tree.children[3].children[1].buffer, 10); // text
	    // ]
	  }
	  // {
	  variables.set(cmd, [ nargs , tree.children[5] ]);
	  // }
	  break;
	case 1:
	  cmd = tree.children[0].buffer; // othercmd
	  nargs = 0;
	  if (tree.children[1].production.id === 0) {
	    // [
	    nargs = parseInt(tree.children[1].children[1].buffer, 10); // text
	    // ]
	  }
	  // {
	  variables.set(cmd, [ nargs , tree.children[3] ]);
	  // }
	  break;
	case 2:
	  // *
	  cmd = tree.children[1].buffer; // othercmd
	  // do not know what to do with '*' at the moment
	  nargs = 0;
	  if (tree.children[2].production.id === 0) {
	    // [
	    nargs = parseInt(tree.children[2].children[1].buffer, 10); // text
	    // ]
	  }
	  // {
	  variables.set(cmd, [ nargs, tree.children[4]]);
	  // }
	  break;
      }
      break;
    case 4:
      throw new Error('Should never reach case 4 because handled before.');
    case 5:
      throw new Error('Should never reach case 5 because handled before.');
    case 6:
      throw new Error('Should never reach case 6 because handled before.');
    case 7:
      throw new Error('Should never reach case 7 because handled before.');
  }

}
