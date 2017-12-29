import test from 'ava' ;

import { shakestring } from '../../src' ;

function macro ( t , string , expected ) {
	let output = '' ;
	const out = { 'write' : buffer => output += buffer } ;
	shakestring(string, out);
	t.is(output, expected);
}

macro.title = ( _ , string , expected ) => `shakestring('${string}') === '${expected}'`

test( macro , '' , '' ) ;
test( macro , 'ah' , 'ah' ) ;

test( macro , '\\abctrue\\ifabc ah\\fi' , ' ah' ) ;
test( macro , '\\abcfalse\\ifabc ah\\fi' , '' ) ;

test( macro , '\\def\\mymacro{Hello, world}\\mymacro', 'Hello, world') ;

test( macro , '\\newcommand\\aaa[1]{a#1}\\newcommand\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;
test( macro , '\\newcommand*\\aaa[1]{a#1}\\newcommand*\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;
