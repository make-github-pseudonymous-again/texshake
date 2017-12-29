import test from 'ava' ;

import { shakestring } from '../../src' ;

function macro ( t , string , expected ) {
	let output = '' ;
	const out = { 'write' : buffer => output += buffer } ;
	shakestring(string, out);
	t.is(output, expected);
}

macro.title = ( _ , string , expected ) => `shakestring('${string}') === '${expected}'`

// the empty document
test( macro , '' , '' ) ;

// text-only document
test( macro , 'Lorem ipsum dolor\nsit amet.' , 'Lorem ipsum dolor\nsit amet.' ) ;

// if fi
test( macro , '\\abctrue\\ifabc ah\\fi' , ' ah' ) ; // should
test( macro , '\\abcfalse\\ifabc ah\\fi' , '' ) ; // the

// if else fi
test( macro , '\\abctrue\\ifabc ah\\else oh\\fi' , ' ah' ) ; // space
test( macro , '\\abcfalse\\ifabc ah\\else oh\\fi' , ' oh' ) ; // disappear?

// def
test( macro , '\\def\\mymacro{Hello, world}\\mymacro', 'Hello, world') ;

// newcommand single argument
test( macro , '\\newcommand\\aaa[1]{a#1}\\newcommand\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;
test( macro , '\\newcommand*\\aaa[1]{a#1}\\newcommand*\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;

// newcommand two arguments
test( macro , '\\newcommand\\swap[2]{#2#1}\\swap{a}{b}', 'ba') ;

// comment
test( macro , '% Lorem ipsum dolor sit amet' , '%' ) ;
test( macro , 'Hello, world% Lorem ipsum dolor sit amet' , 'Hello, world%' ) ;
test( macro , 'Hello, world % Lorem ipsum dolor sit amet' , 'Hello, world %' ) ;
test( macro , '1 % 2 \n 3' , '1 %\n 3' ) ;
