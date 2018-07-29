import test from 'ava' ;

import { ll1 } from '@aureooms/js-grammar' ;

import { G , shakestring } from '../../src' ;

function transform ( t , string , expected ) {
	let output = '' ;
	const out = { 'write' : buffer => output += buffer } ;
	shakestring(string, out);
	t.is(output, expected);
}

function throws ( t , string , expected ) {
	const out = { 'write' : buffer => undefined } ;
	t.throws(() => shakestring(string, out), expected);
}

transform.title = ( _ , string , expected ) => `shakestring('${string}') === '${expected}'` ;

throws.title = ( _ , string , expected ) => `throws('${string}') ~ '${expected}'` ;

const immutable = ( t , string ) => transform( t , string , string ) ;

immutable.title = ( _ , string ) => transform.title( _ , string , string ) ;

// Grammar should be LL1
test( 'Grammar is LL1' , t => t.true(ll1.is(G)) ) ;

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

// newcommand single and no argument
test( transform , '\\newcommand\\aaa[1]{a#1}\\newcommand\\bbb{\\aaa{bc}}\\bbb', 'abc') ;
test( transform , '\\newcommand*\\aaa[1]{a#1}\\newcommand*\\bbb{\\aaa{bc}}\\bbb', 'abc') ;
test( transform , '\\newcommand{\\aaa}[1]{a#1}\\newcommand{\\bbb}{\\aaa{bc}}\\bbb', 'abc') ;

// newcommand single argument
test( transform , '\\newcommand\\aaa[1]{a#1}\\newcommand\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;
test( transform , '\\newcommand*\\aaa[1]{a#1}\\newcommand*\\bbb[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;
test( transform , '\\newcommand{\\aaa}[1]{a#1}\\newcommand{\\bbb}[1]{\\aaa{b#1}}\\bbb{c}', 'abc') ;

// newcommand two arguments
test( transform , '\\newcommand\\swap[2]{#2#1}\\swap{a}{b}', 'ba') ;
test( transform , '\\newcommand*\\swap[2]{#2#1}\\swap{a}{b}', 'ba') ;
test( transform , '\\newcommand{\\swap}[2]{#2#1}\\swap{a}{b}', 'ba') ;


// comment
test( transform , '% Lorem ipsum dolor sit amet' , '%' ) ;
test( transform , 'Hello, world% Lorem ipsum dolor sit amet' , 'Hello, world%' ) ;
test( transform , 'Hello, world % Lorem ipsum dolor sit amet' , 'Hello, world %' ) ;
test( transform , '1 % 2 \n 3' , '1 %\n 3' ) ;


// non matching brackets in math envs
test( immutable , '$[0,1)$' ) ;
test( immutable , '\\([0,1)\\)' ) ;
test( immutable , '$(0,1]$' ) ;
test( immutable , '\\((0,1]\\)' ) ;

// nested square brackets (not parsed as nested)
test( immutable , '\\nestedsquarebrackets[[]]') ;

// complex command call
test( transform , ' \\newtheorem{lemma}[theorem]{Lemma} % \\begin{Lemma}', ' \\newtheorem{lemma}[theorem]{Lemma} %') ;

// complex math env
test( immutable , '\\begin{displaymath} S_r^\\ell(n,d) = O\\left( \\log dntr + \\frac{n^d}{t} ( \\log t + \\frac{r}{t^{d-2}} ) + t^{d+1} \\nu(t,d+1) + \\frac{n^d}{t^d} ( \\log \\nu(t,d+1) + t \\log t ) \\right), \\end{displaymath}' ) ;

test( immutable , '\\[ S_r^\\ell(n,d) = O\\left( \\log dntr + \\frac{n^d}{t} ( \\log t + \\frac{r}{t^{d-2}} ) + t^{d+1} \\nu(t,d+1) + \\frac{n^d}{t^d} ( \\log \\nu(t,d+1) + t \\log t ) \\right), \\]' ) ;

test( immutable , '\\begin{displaymath}\n\t\\begin{vmatrix}\n\t\t1 & x_p & y_p \\\\\n\t\t1 & x_q & y_q \\\\\n\t\t1 & x_r & y_r\n\t\\end{vmatrix}.\n\\end{displaymath}' ) ;

// escaped newline
test( immutable , 'a\\\nb' ) ;

// incomplete arg number
test( throws , '#' , /Incomplete #/ ) ;
test( throws , '#x' , /Incomplete #/ ) ;

// no arguments defined
test( throws , '#1' , /no arguments in context/ ) ;

// escaped #
test( immutable , '\\#' ) ;
test( immutable , '\\#x' ) ;
test( immutable , '\\#1' ) ;

// simple command call with *
test( immutable , '\\paragraph*{Testing}' ) ;

// nonmatching curly brackets
test( throws , '{' , /unexpected end of file/ ) ;

// newcommand two arguments but one missing from call
test( throws , '\\newcommand\\test[2]{#1-#2}\\test{a}', /is defined with 2 arguments but 1 were given/) ;
test( throws , '\\newcommand\\test[2]{#1-#2}\\test{a}{b}{c}', /is defined with 2 arguments but 3 were given/) ;

// newcommand two arguments but one missing from definition
test( throws , '\\newcommand\\test[2]{#1-#2-#3}\\test{a}{b}', /only got 2 arguments/) ;

// errors at specific positions
test( throws , '\\newcommand\\test[{}]{x}', /1:18/) ;
test( throws , ' \\newcommand\\test[{}]{x}', /1:19/) ;
test( throws , '\n\\newcommand\\test[{}]{x}', /2:18/) ;
