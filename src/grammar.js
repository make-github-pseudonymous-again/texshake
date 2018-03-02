import { grammar } from '@aureooms/js-grammar' ;

const start = "blocks" ;
const eof = "$" ;
const productions = {
  "blocks" : { // blocks : 0
    "add" : [ "&block" , "&blocks" ] , // 0.0
    "end" : [ ] , // 0.1
  } ,
  "block" : { // block : 1
    "text" : [ '=text' ] , // 1.0
    "newif" : [ '=newif' , '=ifcmd' ] , // 1.1
    "ifcmd" : [ '=ifcmd' , "&blocks" , "&endif" ] , // 1.2
    "falsecmd" : [ '=falsecmd' ] , // 1.3
    "truecmd" : [ '=truecmd' ] , // 1.4
    "comment" : [ '=comment' ] , // 1.5
    "othercmd" : [ '=othercmd' , "&cmd*" , "&cmdoptargs" , "&cmdargs" ] , // 1.6
    "def" : [ '=def' , '=othercmd' , '={' , "&blocks" , '=}' ] , // 1.7
    "newcommand" : [ '=newcommand' , "&cmddef" ] , // 1.8
    "{blocks}" : [ '={' , "&blocks" , '=}' ] , // 1.9
    "[blocks]" : [ '=[' , "&blocks" , '=]' ] , // 1.10
    "*" : [ '=*' ] , // 1.11
    "arg" : [ '=arg' ] , // 1.12
  } ,
  "endif" : { // endif : 2
    "elsefi" : [ '=else' , "&blocks" , '=fi' ] , // 2.0
    "fi" : [ '=fi' ] , // 2.1
  } ,
  "cmddef" : { // command definition 3
    "{cmd}[x]{blocks}" : [ '={' , '=othercmd' , '=}' , "&cmddefargs" , '={' , "&blocks" , '=}' ] , // 3.0
    "cmd[x]{blocks}" : [ '=othercmd' , "&cmddefargs" , '={' , "&blocks" , '=}' ] , // 3.1
    "*cmd[x]{blocks}" : [ '=*' , '=othercmd' , "&cmddefargs" , '={' , "&blocks" , '=}' ] , // 3.2
  } ,
  "cmddefargs" : { // command definition arguments 4
    "yes" : [ '=[' , '=text' , '=]' ] , // 4.0
    "no" : [ ] , // 4.1
  } ,
  "cmd*" : { // othercmd star : 5
    "yes" : [ '=*' ] , // 5.0
    "no" : [ ] , // 5.1
  } ,
  "cmdoptargs" : { // othercmd optional arguments 6
    "yes" : [ '=[' , "&blocks" , '=]' ] , // 6.0
    "no" : [ ] , // 6.1
  } ,
  "cmdargs" : { // othercmd arguments : 7
    "add" : [ '={' , "&blocks" , '=}' , "&cmdargs" ] , // 7.0
    "end" : [ ] , // 7.1
  } ,
} ;

export const G = grammar.from( { start , eof , productions } ) ;
