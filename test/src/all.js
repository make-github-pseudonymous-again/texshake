import test from 'ava' ;
import fs from 'fs' ;

import {
	ll1 ,
} from '@aureooms/js-grammar' ;

import {
	grammar ,
	shakestring ,
	shakestream ,
} from '../../src' ;

const LONG_SEQUENCE_SIZE = 100000 ;

async function transform ( t , string , expected ) {
	let output = '' ;
	const out = { 'write' : buffer => output += buffer } ;
	await shakestring(string, out);
	t.is(output, expected);
}

function throws ( t , string , expected ) {
	const out = { 'write' : buffer => undefined } ;
	return t.throwsAsync(shakestring(string, out), expected);
	//return shakestring(string, out)
		//.then( () => t.fail() )
		//.catch( error => {
			//t.true(expected.test(error.message));
		//} ) ;
}

const immutable = async ( t , string ) => await transform( t , string , string ) ;

async function transformFile ( t , inputFilePath , outputFilePath ) {
	const encoding = 'utf8' ;
	const expected = fs.readFileSync(outputFilePath, encoding);

	let output = '' ;
	const out = { 'write' : buffer => output += buffer } ;

	const readStream = fs.createReadStream( inputFilePath, { encoding } ) ;
	await shakestream(readStream, out);

	t.is(output, expected);
}

const immutableFile = async ( t , path ) => await transformFile( t , path , path ) ;

transform.title = ( title , string , expected ) => title || `shakestring('${string}') === '${expected}'` ;

throws.title = ( title , string , expected ) => title || `throws('${string}') ~ '${expected}'` ;

immutable.title = ( title , string ) => transform.title( title , string , string ) ;

transformFile.title = ( _ , inputFilePath , outputFilePath ) => `Transformed LaTeX file: ${inputFilePath.replace(/\.tex$/, '').replace(/^.*\//, '')}` ;

immutableFile.title = ( _ , filepath ) => `Immutable LaTeX file: ${filepath.replace(/\.tex$/, '').replace(/^.*\//, '')}` ;

// Grammar should be LL1
test( 'Grammar is LL1' , t => t.true(ll1.is(grammar)) ) ;

// the empty document
test( immutable , '' ) ;

// text-only document
test( 'Text with a newline' , immutable , 'Lorem ipsum dolor\nsit amet.' ) ;

// undefined command
test( immutable , '\\usepackage{microtype}' ) ;

// undefined ifcmd
test( immutable , ' \\ifnum\\mynum>6 x \\fi ' ) ;
test( immutable , ' \\ifnum\\mynum>6 x \\else y \\fi ' ) ;

// Stars in some text
test( immutable , '*Lorem * ipsum* dolor sit $a*$ \\(m*e^*t_*\\)*' ) ;

// iftrue fi
test( transform , '\\iftrue ah\\fi' , ' ah' ) ;
// iftrue else fi
test( transform , '\\iftrue ah\\else oh\\fi' , ' ah' ) ;
// iffalse fi
test( transform , '\\iffalse ah\\fi' , '' ) ;
// iffalse else fi
test( transform , '\\iffalse ah\\else oh\\fi' , ' oh' ) ;

// if fi
test( transform , '\\abctrue\\ifabc ah\\fi' , ' ah' ) ; // should
test( transform , '\\abcfalse\\ifabc ah\\fi' , '' ) ; // the

// if else fi
test( transform , '\\abctrue\\ifabc ah\\else oh\\fi' , ' ah' ) ; // space
test( transform , '\\abcfalse\\ifabc ah\\else oh\\fi' , ' oh' ) ; // disappear?

// with a newif
test( transform , '\\newif\\ifabc\\abctrue\\ifabc ah\\fi' , ' ah' ) ; // should

// \iff is not an \ifxxx statement
test( immutable , '$\\iff$' ) ;
test( immutable , '\\(\\iff\\)' ) ;
test( immutable , '$A \\iff B$' ) ;
test( immutable , '\\(A \\iff B\\)' ) ;

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
test( 'Comments with a newline' , transform , '1 % 2 \n 3' , '1 %\n 3' ) ;


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
test( 'Complex displaymath environment (equation 1)' , immutable , '\\begin{displaymath} S_r^\\ell(n,d) = O\\left( \\log dntr + \\frac{n^d}{t} ( \\log t + \\frac{r}{t^{d-2}} ) + t^{d+1} \\nu(t,d+1) + \\frac{n^d}{t^d} ( \\log \\nu(t,d+1) + t \\log t ) \\right), \\end{displaymath}' ) ;

test( 'Complex displaymath environment (equation 2)' , immutable , '\\[ S_r^\\ell(n,d) = O\\left( \\log dntr + \\frac{n^d}{t} ( \\log t + \\frac{r}{t^{d-2}} ) + t^{d+1} \\nu(t,d+1) + \\frac{n^d}{t^d} ( \\log \\nu(t,d+1) + t \\log t ) \\right), \\]' ) ;

test( 'Complex displaymath environment (matrix)' , immutable , '\\begin{displaymath}\n\t\\begin{vmatrix}\n\t\t1 & x_p & y_p \\\\\n\t\t1 & x_q & y_q \\\\\n\t\t1 & x_r & y_r\n\t\\end{vmatrix}.\n\\end{displaymath}' ) ;

// escaped newline
test( 'Escaped newline' , immutable , 'a\\\nb' ) ;

// incomplete arg number
test( throws , '#' , /unexpected end of file/ ) ;
test( throws , '#x' , /1:2/ ) ;

// no arguments defined
test( throws , '##' , /Escaped hash \(##\) without argument context/ ) ;
test( throws , '#1' , /#1 without argument context/ ) ;
test( throws , '#2' , /#2 without argument context/ ) ;
test( throws , '#3' , /#3 without argument context/ ) ;
test( throws , '#4' , /#4 without argument context/ ) ;
test( throws , '#5' , /#5 without argument context/ ) ;
test( throws , '#6' , /#6 without argument context/ ) ;
test( throws , '#7' , /#7 without argument context/ ) ;
test( throws , '#8' , /#8 without argument context/ ) ;
test( throws , '#9' , /#9 without argument context/ ) ;

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
test( 'Wrong argument number format at 2:18 throws' , throws , '\n\\newcommand\\test[{}]{x}', /2:18/) ;

// those became gobbled when we introduced async parsing
test( 'Unmatched closing curly brace at 1:1 throws' , throws , '}abc', /1:1/) ;
test( 'Unmatched closing curly brace at 1:2 throws' , throws , ' }abc', /1:2/) ;
test( 'Unmatched closing curly brace at 1:3 throws' , throws , '  }abc', /1:3/) ;
test( 'Unmatched closing curly brace at 2:1 throws' , throws , 'a\n}abc', /2:1/) ;
test( 'Unmatched closing curly brace at 2:2 throws' , throws , 'bb\n }abc', /2:2/) ;
test( 'Unmatched closing curly brace at 2:3 throws' , throws , 'ccc\n  }abc', /2:3/) ;
test( 'Unmatched closing curly brace at 3:1 throws' , throws , 'o\na\n}abc', /3:1/) ;
test( 'Unmatched closing curly brace at 3:2 throws' , throws , 'o\nbb\n }abc', /3:2/) ;
test( 'Unmatched closing curly brace at 3:3 throws' , throws , 'o\nccc\n  }abc', /3:3/) ;

// a very long empty document (breaks recursive approaches)
const spaces = (new Array(LONG_SEQUENCE_SIZE)).join(' ') ;
test( 'long sequence of spaces' , immutable , spaces ) ;

const newlines = (new Array(LONG_SEQUENCE_SIZE)).join('\n') ;
test( 'long sequence of newlines' , immutable , newlines ) ;

// immutable input files
const immutableFiledir = 'test/data/immutable' ;
const immutableFiles = fs.readdirSync(immutableFiledir) ;
for ( const filename of immutableFiles )
test( immutableFile , `${immutableFiledir}/${filename}` ) ;

// newenvironment
test( immutable , '\\begin{theorem}\\dots\\end{theorem}' ) ;
test( immutable , '\\begin{theorem}[Brol et al.~\\cite{brol}]\\dots\\end{theorem}' ) ;

test( transform , '\\newenvironment{test}[1][]{#1}{}\\begin{test}x\\end{test}' , 'x' ) ;
test( transform , '\\renewenvironment{test}[1][]{#1}{}\\begin{test}x\\end{test}' , 'x' ) ;
test( transform , '\\newenvironment{test}[1][b]{#1}{}\\begin{test}x\\end{test}' , 'bx' ) ;
test( transform , '\\renewenvironment{test}[1][b]{#1}{}\\begin{test}x\\end{test}' , 'bx' ) ;
test( transform , '\\newenvironment{test}[2][b]{#1}{#2}\\begin{test}{z}x\\end{test}' , 'bxz' ) ;
test( transform , '\\renewenvironment{test}[2][b]{#1}{#2}\\begin{test}{z}x\\end{test}' , 'bxz' ) ;
test( transform , '\\newenvironment{test}[2][b]{#1}{#2}\\begin{test}[a]{z}x\\end{test}' , 'axz' ) ;
test( transform , '\\renewenvironment{test}[2][b]{#1}{#2}\\begin{test}[a]{z}x\\end{test}' , 'axz' ) ;
test( transform , '\\newenvironment{test}[1]{#1}{}\\begin{test}{a}x\\end{test}' , 'ax' ) ;
test( transform , '\\renewenvironment{test}[1]{#1}{}\\begin{test}{a}x\\end{test}' , 'ax' ) ;
test( transform , '\\newenvironment{test}[1][]{#1}{}' , '' ) ;
test( transform , '\\renewenvironment{test}[1][]{#1}{}' , '' ) ;
test( transform , '\\newenvironment{items}{\\begin{itemize}}{\\end{itemize}}\\begin{items}\\end{items}' , '\\begin{itemize}\\end{itemize}' )
test( throws , '\\newenvironment{test}[1][]{#1}{}\\begin{test}{a}x\\end{test}' , /test is defined with 1 arguments but 2 were given/ ) ;
test( throws , '\\renewenvironment{test}[1][]{#1}{}\\begin{test}{a}x\\end{test}' , /test is defined with 1 arguments but 2 were given/ ) ;

// transformed input files
const transformedFiledir = 'test/data/transform' ;
const transformedInputFiledir = `${transformedFiledir}/input` ;
const transformedOutputFiledir = `${transformedFiledir}/output` ;
const transformedInputFiles = fs.readdirSync(transformedInputFiledir) ;
for ( const filename of transformedInputFiles )
test( transformFile , `${transformedInputFiledir}/${filename}` , `${transformedOutputFiledir}/${filename}` ) ;

// argument escaping
test( transform , '\\newcommand\\x[1]{\\newcommand\\y[1]{#1 ##1}}\\x{test}\\y{1212}' , 'test 1212' ) ;
test( throws , '\\def\\y{##1}\\newcommand\\x[1]{\\y}\\x{test}' , /#1 without argument context/ ) ;

// default arguments with newcommand and renewcommand
test( transform , '\\newcommand{\\price}[2][17.5]{\\pounds #2 excl VAT @ #1\\%}\\price{100}' , '\\pounds 100 excl VAT @ 17.5\\%') ;
test( transform , '\\newcommand{\\price}[2][17.5]{\\pounds #2 excl VAT @ #1\\%}\\price[20]{1000}' , '\\pounds 1000 excl VAT @ 20\\%') ;
test( transform , '\\renewcommand{\\price}[2][17.5]{\\pounds #2 excl VAT @ #1\\%}\\price{100}' , '\\pounds 100 excl VAT @ 17.5\\%') ;
test( transform , '\\renewcommand{\\price}[2][17.5]{\\pounds #2 excl VAT @ #1\\%}\\price[20]{1000}' , '\\pounds 1000 excl VAT @ 20\\%') ;
