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
  } ;

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

      switch ( cmd ) {

	case '\\newif':
	case '\\else':
	case '\\def':
	case '\\newcommand':
	case '\\renewcommand':
	case '\\newenvironment':
	case '\\renewenvironment':
	case '\\begin':
	case '\\end':
	case '\\fi':
	  cmdtype = cmd.substr(1); // remove the leading backslash
	  break;

	case '\\(':
	case '\\)':
	case '\\[':
	case '\\]':
	  cmdtype = cmd;
	  break;

	default:
	  if ( cmd.substr(0,3) === '\\if' && cmd !== '\\iff' ) cmdtype = 'ifcmd' ;
	  else if (cmd.substr(cmd.length-5, 5) === 'false' ) cmdtype = 'falsecmd' ;
	  else if (cmd.substr(cmd.length-4, 4) === 'true' ) cmdtype = 'truecmd' ;
	  break;

      }

      yield [ cmdtype , cmd , new Position(line, position) ] ;

      if ( cmd === '\\\n' ) {
	++line;
	position = FIRST_POSITION;
      }
      else {
	position += cmd.length;
      }

    }
    else {
      switch ( c ) {

	case '0':
	case '1':
	case '2':
	case '3':
	case '4':
	case '5':
	case '6':
	case '7':
	case '8':
	case '9':
	  yield* flush();
	  yield [ 'digit' , c , new Position(line, position) ] ;
	  ++position;
	  break;

	case '#':
	case '{':
	case '}':
	case '[':
	case ']':
	case '*':
	case '$':
	case ' ':
	  yield* flush();
	  yield [ c , c , new Position(line, position) ] ;
	  ++position;
	  break;

	case '\n':
	  yield* flush();
	  yield [ c , c , new Position(line, position) ] ;
	  ++line;
	  position = FIRST_POSITION;
	  break;

	case '%':
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
	  break;

	default:
	  buffer += c ;
	  break;
	}

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
