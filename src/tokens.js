import { Position } from './Position' ;

const FIRST_LINE = 1;
const FIRST_POSITION = 1;

function* _tokens ( string ) {

  let line = FIRST_LINE ;
  let position = FIRST_POSITION;
  let i = 0 ;
  let n = string.length ;

  let buffer = '';

  const flush = function* () {
    if ( buffer !== '' ) {
      yield [ 'text' , buffer , new Position(line, position) ] ;
      position += buffer.length;
      buffer = '';
    }
  }

  while ( i < n ) {
    const c = string[i] ;
    if ( c === '\\' ) {
      let cmd = '\\' ;
      while ( ++i < n ) { // read command
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

      let cmdtype = 'othercmd' ;

      if ( cmd.substr(0,3) === '\\if' ) cmdtype = 'ifcmd' ;

      else if (cmd.substr(cmd.length-5, 5) === 'false' ) cmdtype = 'falsecmd' ;

      else if (cmd.substr(cmd.length-4, 4) === 'true' ) cmdtype = 'truecmd' ;

      else if ( cmd === '\\newif' ) cmdtype = 'newif' ;

      else if ( cmd === '\\else' ) cmdtype = 'else' ;

      else if ( cmd === '\\def' ) cmdtype = 'def' ;

      else if ( cmd === '\\newcommand' ) cmdtype = 'newcommand' ;

      else if ( cmd === '\\fi' ) cmdtype = 'fi' ;

      else if ( cmd === '\\(' ) cmdtype = '\\(' ;

      else if ( cmd === '\\)' ) cmdtype = '\\)' ;

      else if ( cmd === '\\[' ) cmdtype = '\\[' ;

      else if ( cmd === '\\]' ) cmdtype = '\\]' ;

      yield [ cmdtype , cmd , new Position(line, position) ] ;
      if ( cmd === '\\\n' ) {
	++line;
	position = FIRST_POSITION;
      }
      else {
	position += cmd.length;
      }

    }
    else if ( c === '#' ) {
      yield* flush();

      // read arg number
      let arg = '#' ;
      while ( ++i < n ) {
	const d = string[i];
	if ( d >= '0' && d <= '9' ) arg += d;
	else break;
      }
      if ( arg === '#' ) throw new Error('Incomplete #') ;
      yield [ 'arg' , arg , new Position(line, position) ] ;
      position += arg.length;
    }
    else if ( c === '{' ) {
      yield* flush();
      yield [ '{' , '{' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === '}' ) {
      yield* flush();
      yield [ '}' , '}' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === '[' ) {
      yield* flush();
      yield [ '[' , '[' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === ']' ) {
      yield* flush();
      yield [ ']' , ']' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === '*' ) {
      yield* flush();
      yield [ '*' , '*' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === '$' ) {
      yield* flush();
      yield [ '$' , '$' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === ' ' ) {
      yield* flush();
      yield [ ' ' , ' ' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === '\t' ) {
      yield* flush();
      yield [ '\t' , '\t' , new Position(line, position) ] ;
      ++position;
      ++i;
    }
    else if ( c === '\n' ) {
      yield* flush();
      yield [ '\n' , '\n' , new Position(line, position) ] ;
      ++line;
      position = FIRST_POSITION;
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
      yield [ 'comment' , buffer , new Position(line, position) ] ;
      position += buffer.length;
      buffer = '';
      if ( i < n ) {
	yield [ '\n' , '\n' , new Position(line, position) ] ;
	++line;
        position = FIRST_POSITION;
      }
      ++i;
    }
    else {
      buffer += c ;
      ++i;
    }
  }

  yield* flush();

}

export function* tokens ( string ) {

  for ( const [ terminal , buffer , position ] of _tokens(string) ) {
    yield {
      'type' : 'leaf' ,
      terminal ,
      buffer ,
      position ,
    }
  }
}
