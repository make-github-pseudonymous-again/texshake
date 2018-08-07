import Position from './Position' ;

const FIRST_LINE = 1;
const FIRST_POSITION = 1;

async function* _tokens ( tape ) {

  let line = FIRST_LINE ;
  let position = FIRST_POSITION;

  let buffer = '';

  const flush = function* () {
    if ( buffer !== '' ) {
      yield [ 'text' , buffer , new Position(line, position) ] ;
      position += buffer.length;
      buffer = '';
    }
  }

  while ( true ) {

    const c = await tape.read();

    if ( c === tape.eof ) break ;

    if ( c === '\\' ) {
      let cmd = '\\' ;
      while ( true ) { // read command

	const d = await tape.read();

	if ( d === tape.eof ) break ;

	// http://www.tex.ac.uk/FAQ-whatmacros.html
	if ( ( d >= 'a' && d <= 'z' ) || ( d >= 'A' && d <= 'Z' ) ) cmd += d;
	else {
	  if ( cmd === '\\' ) cmd += d;
	  else tape.unread(d);
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
      while ( true ) {
	const d = await tape.read();
	if ( d === tape.eof ) break ;
	else if ( d >= '0' && d <= '9' ) arg += d;
	else {
	  tape.unread(d);
	  break;
	}
      }
      if ( arg === '#' ) throw new Error('Incomplete #') ;
      yield [ 'arg' , arg , new Position(line, position) ] ;
      position += arg.length;
    }
    else if ( c === '{' ) {
      yield* flush();
      yield [ '{' , '{' , new Position(line, position) ] ;
      ++position;
    }
    else if ( c === '}' ) {
      yield* flush();
      yield [ '}' , '}' , new Position(line, position) ] ;
      ++position;
    }
    else if ( c === '[' ) {
      yield* flush();
      yield [ '[' , '[' , new Position(line, position) ] ;
      ++position;
    }
    else if ( c === ']' ) {
      yield* flush();
      yield [ ']' , ']' , new Position(line, position) ] ;
      ++position;
    }
    else if ( c === '*' ) {
      yield* flush();
      yield [ '*' , '*' , new Position(line, position) ] ;
      ++position;
    }
    else if ( c === '$' ) {
      yield* flush();
      yield [ '$' , '$' , new Position(line, position) ] ;
      ++position;
    }
    else if ( c === '\n' ) {
      yield* flush();
      yield [ '\n' , '\n' , new Position(line, position) ] ;
      ++line;
      position = FIRST_POSITION;
    }
    else if ( c === '%') {
      yield* flush();
      buffer = '%';
      let d = '';
      while ( true ) {
	d = await tape.read();
	if ( d === tape.eof || d === '\n' ) break ;
	buffer += d ;
      }
      yield [ 'comment' , buffer , new Position(line, position) ] ;
      position += buffer.length;
      buffer = '';
      if ( d === '\n' ) {
	yield [ '\n' , '\n' , new Position(line, position) ] ;
	++line;
        position = FIRST_POSITION;
      }
    }
    else {
      buffer += c ;
    }
  }

  yield* flush();

}

export default async function* tokens ( tape ) {

  for await ( const [ terminal , buffer , position ] of _tokens(tape) ) {
    yield {
      'type' : 'leaf' ,
      terminal ,
      buffer ,
      position ,
    }
  }
}
