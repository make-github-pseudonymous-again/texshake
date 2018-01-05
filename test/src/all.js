import test from 'ava' ;

import { shakestring } from '../../src' ;

function transform ( t , string , expected ) {
	let output = '' ;
	const out = { 'write' : buffer => output += buffer } ;
	shakestring(string, out);
	t.is(output, expected);
}

transform.title = ( _ , string , expected ) => `shakestring('${string}') === '${expected}'`

const immutable = ( t , string ) => transform( t , string , string ) ;

immutable.title = ( _ , string ) => transform.title( _ , string , string ) ;

// the empty document
test( immutable , '' ) ;

// text-only document
test( immutable , 'Lorem ipsum dolor\nsit amet.' ) ;

// undefined command
test( immutable , '\\usepackage{microtype}' ) ;

// undefined ifcmd
test( immutable , '\\ifnum\\mynum>6 x \\else y \\fi' ) ;

// Stars in some text
test( immutable , '*Lorem * ipsum* dolor sit $a*$ \\(m*e^*t_*\\)*' ) ;

// if fi
test( transform , '\\abctrue\\ifabc ah\\fi' , ' ah' ) ; // should
test( transform , '\\abcfalse\\ifabc ah\\fi' , '' ) ; // the

// if else fi
test( transform , '\\abctrue\\ifabc ah\\else oh\\fi' , ' ah' ) ; // space
test( transform , '\\abcfalse\\ifabc ah\\else oh\\fi' , ' oh' ) ; // disappear?

// with a newif
test( transform , '\\newif\\ifabc\\abctrue\\ifabc ah\\fi' , ' ah' ) ; // should

// def
test( transform , '\\def\\mymacro{Hello, world}\\mymacro', 'Hello, world') ;

// defception
test( transform , '\\def\\abc{\\def\\xyz{7}}\\abc\\xyz', '7') ;

// conditional defs
test( transform , '\\abctrue\\ifabc\\def\\xyz{A cat.}\\else\\def\\xyz{A dog.}\\fi\\xyz', 'A cat.') ;
test( transform , '\\abcfalse\\ifabc\\def\\xyz{A cat.}\\else\\def\\xyz{A dog.}\\fi\\xyz', 'A dog.') ;

// def and undefined
test( transform , '\\def\\affil{496}\\author[\\affil]{John Doe}' , '\\author[496]{John Doe}') ;

// newcommand single argument
test( transform , '\\newcommand\\aaa[1]{a#1}\\newcommand\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;
test( transform , '\\newcommand*\\aaa[1]{a#1}\\newcommand*\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;

// newcommand two arguments
test( transform , '\\newcommand\\swap[2]{#2#1}\\swap{a}{b}', 'ba') ;


// comment
test( transform , '% Lorem ipsum dolor sit amet' , '%' ) ;
test( transform , 'Hello, world% Lorem ipsum dolor sit amet' , 'Hello, world%' ) ;
test( transform , 'Hello, world % Lorem ipsum dolor sit amet' , 'Hello, world %' ) ;
test( transform , '1 % 2 \n 3' , '1 %\n 3' ) ;
