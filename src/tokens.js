export function* tokens ( string ) {

  let i = 0 ;
  let n = string.length ;

  let buffer = '';

  const flush = function* () {
    if ( buffer !== '' ) {
      yield [ 'text' , buffer ] ;
      buffer = '';
    }
  }

  while ( i < n ) {
    const c = string[i] ;
    if ( c === '\\' ) {

      // read command

      let cmd = c ;
      while ( ++i < n ) {
	const d = string[i];
	// http://www.tex.ac.uk/FAQ-whatmacros.html
	if ( ( d >= 'a' && d <= 'z' ) || ( d >= 'A' && d <= 'Z' ) ) cmd += d;
	else {
	  if ( cmd === '\\' ) {
	    cmd += d;
	    ++i;
	  }
	  break;
	}
      }

      yield* flush();

      if ( cmd.substr(0,3) === '\\if' ) yield [ 'ifcmd' , cmd ] ;

      else if (cmd.substr(cmd.length-5, 5) === 'false' ) yield [ 'falsecmd' , cmd ] ;

      else if (cmd.substr(cmd.length-4, 4) === 'true' ) yield [ 'truecmd' , cmd ] ;

      else if ( cmd === '\\newif' )  yield [ 'newif' , cmd ] ;

      else if ( cmd === '\\else' )  yield [ 'else' , cmd ] ;

      else if ( cmd === '\\def' )  yield [ 'def' , cmd ] ;

      else if ( cmd === '\\newcommand' )  yield [ 'newcommand' , cmd ] ;

      else if ( cmd === '\\fi' )  yield [ 'fi' , cmd ] ;

      else yield [ 'othercmd' , cmd ] ;

    }
    else if ( c === '#' ) {

      // read arg number
      let arg = '#' ;
      while ( ++i < n ) {
	const d = string[i];
	if ( d >= '0' && d <= '9' ) arg += d;
	else {
	  if ( arg === '#' ) throw new Error('Incomplete #') ;
	  break;
	}
      }
      yield* flush();
      yield [ 'arg' , arg ]
    }
    else if ( c === '{' ) {
      yield* flush();
      yield [ '{' , '{' ] ;
      ++i;
    }
    else if ( c === '}' ) {
      yield* flush();
      yield [ '}' , '}' ] ;
      ++i;
    }
    else if ( c === '[' ) {
      yield* flush();
      yield [ '[' , '[' ] ;
      ++i;
    }
    else if ( c === ']' ) {
      yield* flush();
      yield [ ']' , ']' ] ;
      ++i;
    }
    else if ( c === '*' ) {
      yield* flush();
      yield [ '*' , '*' ] ;
      ++i;
    }
    else if ( c === '%') {
      yield* flush();
      buffer = '%';
      let d = '';
      while ( ++i < n ) {
	d = string[i];
	if ( d === '\n' ) break ;
	buffer += d ;
      }
      yield [ 'comment' , buffer ] ;
      if ( i < n ) buffer = d;
      else buffer = '';
      ++i;
    }
    else {
      buffer += c ;
      ++i;
    }
  }

  yield* flush();

}
