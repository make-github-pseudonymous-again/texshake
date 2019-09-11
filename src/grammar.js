import { grammar } from '@aureooms/js-grammar' ;

const environment_definition = {
    "{envname}[nargs][default]{begin}{end}" : [ '={' , '&anything' , '=}' , "&ignore" , "&definition-parameters" , '={' , "&anything" , '=}' , "&ignore" , '={' , "&anything" , '=}' ] ,
    "*{envname}[nargs][default]{begin}{end}" : [ '=*' , '={' , '&anything' , '=}' , "&definition-parameters" , '={' , "&anything" , '=}' , '={' , "&anything" , '=}' ] ,
} ;

const command_definition = {
  "{cmd}[nargs][default]{anything}" : [ '={' , '=othercmd' , '=}' , "&definition-parameters" , '={' , "&anything" , '=}' ] ,
  "cmd[nargs][default]{anything}" : [ '=othercmd' , "&definition-parameters" , '={' , "&anything" , '=}' ] ,
  "*cmd[nargs][default]{anything}" : [ '=*' , '=othercmd' , "&definition-parameters" , '={' , "&anything" , '=}' ] ,
} ;

const root = "document" ;
const start = "contents" ;
const eof = "%" ;
const productions = {
  "document" : {
    "contents" : [ "&anything" , "=%" ] ,
  } ,
  "anything" : {
    "starts-with-othercmd" : [ '&othercmd' , "&cmdafter" ] ,
    "starts-with-begin-environment" : [ "&begin-environment" , "&cmdafter"] ,
    "starts-with-end-environment" : [ "&end-environment" , "&anything" ] ,
    "starts-with-*" : [ '&*' , "&anything" ] ,
    "starts-with-[" : [ '&[' , "&anything" ] ,
    "starts-with-]" : [ '&]' , "&anything" ] ,
    "starts-with-a-group" : [ '&group' , '&anything' ] ,
    "starts-with-something-else" : [ "&something-else" , "&anything" ] ,
    "end" : [ ] , // 0.1
  } ,
  "anything-but-]" : {
    "starts-with-othercmd" : [ '&othercmd' , "&cmdafter-but-not-]" ] ,
    "starts-with-begin-environment" : [ "&begin-environment" , "&cmdafter-but-not-]" ] ,
    "starts-with-end-environment" : [ "&end-environment" , "&anything-but-]" ] ,
    "starts-with-*" : [ '&*' , "&anything-but-]" ] ,
    "starts-with-[" : [ '&[' , "&anything-but-]" ] ,
    "starts-with-a-group" : [ '&group' , '&anything-but-]' ] ,
    "starts-with-something-else" : [ "&something-else" , "&anything-but-]" ] ,
    "end" : [ ] ,
  } ,
  "group" : {
    "group" : [ '={' , '&anything' , '=}' ] ,
  } ,
  "optgroup" : {
    "group" : [ '=[' , "&anything-but-]" , '=]' ] ,
  } ,
  "othercmd" : {
    "othercmd" : [ '=othercmd' , "&cmd*" , "&cmdargs" ] ,
  },
  "begin-environment" : {
    "begin-environment" : [ "=begin", '={' , "=text" , '=}' , "&cmdargs"] ,
  } ,
  "end-environment" : {
    "end-environment" : [ "=end", '={' , "=text" , '=}'] ,
  } ,
  "*" : {
    "*" : [ '=*' ] ,
  } ,
  "[" : {
    "[" : [ '=[' ] ,
  } ,
  "]" : {
    "]" : [ '=]' ] ,
  } ,
  "something-else" : {
    "text" : [ '=text' ] , // 1.0
    "newif" : [ '=newif' , '=ifcmd' ] , // 1.1
    "ifcmd" : [ '=ifcmd' , "&anything" , "&endif" ] , // 1.2
    "falsecmd" : [ '=falsecmd' ] , // 1.3
    "truecmd" : [ '=truecmd' ] , // 1.4
    "comment" : [ '=comment' ] , // 1.5
    "def" : [ '=def' , '=othercmd' , '={' , "&anything" , '=}' ] , // 1.7
    "newcommand" : [ '=newcommand' , "&command-definition" ] , // 1.8
    "renewcommand" : [ '=renewcommand' , "&command-redefinition" ] ,
    "newenvironment" : [ '=newenvironment' , "&environment-definition" ] ,
    "renewenvironment" : [ '=renewenvironment' , "&environment-redefinition" ] ,
    "\n" : [ '=\n' ] ,
    " " : [ '= ' ] ,
    "digit" : [ '=digit' ] ,
    "argument" : [ '=#' , '&argument-subject' ] , // 1.12
    "$" : [ '=$' ] ,
    "math" : [ '=\\(' , '&anything' , '=\\)' ] ,
    "mathenv" : [ '=\\[' , '&anything' , '=\\]' ] ,
  } ,
  "argument-subject" : {
    "#" : [ "=#" ] ,
    "digit" : [ "=digit" ] ,
  } ,
  "endif" : { // endif : 2
    "elsefi" : [ '=else' , "&anything" , '=fi' ] , // 2.0
    "fi" : [ '=fi' ] , // 2.1
  } ,
  "command-definition" : command_definition ,
  "command-redefinition" : command_definition ,
  "environment-definition" : environment_definition ,
  "environment-redefinition" : environment_definition ,
  "definition-parameters" : {
    "yes" : [ '=[' , '=digit' , '=]' , '&default-argument-for-definition' , "&ignore" ] ,
    "no" : [ ] ,
  } ,
  "default-argument-for-definition" : {
    "yes" : [ '=[' , '&anything-but-]' , '=]' ] ,
    "no" : [ ] ,
  } ,
  "cmd*" : { // othercmd star : 5
    "yes" : [ '=*' ] , // 5.0
    "no" : [ ] , // 5.1
  } ,
  "cmdargs" : { // othercmd arguments : 7
    "normal" : [ "&group" , "&cmdargs" ] ,
    "optional" : [ "&optgroup" , "&cmdargs" ] ,
    "end" : [ ] , // 7.1
  } ,
  "cmdafter" : { // after othercmd
    "othercmd" : [ "&othercmd" , "&cmdafter" ] ,
    "begin-environment" : [ "&begin-environment" , "&cmdafter"] ,
    "end-environment" : [ "&end-environment" , "&anything" ] ,
    "]-then-anything" : [ "&]" , "&anything" ] ,
    "something-else-then-anything" : [ "&something-else" , "&anything" ] ,
    "nothing" : [ ] ,
  } ,
  "cmdafter-but-not-]" : { // after othercmd
    "othercmd" : [ "&othercmd" , "&cmdafter-but-not-]" ] ,
    "begin-environment" : [ "&begin-environment" , "&cmdafter-but-not-]" ] ,
    "end-environment" : [ "&end-environment" , "&anything-but-]" ] ,
    "something-else-then-anything" : [ "&something-else" , "&anything-but-]" ] ,
    "nothing" : [ ] ,
  } ,
  "ignore" : {
    "starts-with-a-space" : [ "= " , "&ignore" ] ,
    "starts-with-a-newline" : [ "=\n" , "&ignore" ] ,
    "starts-with-a-comment" : [ "=comment" , "&ignore" ] ,
    "nothing" : [ ] ,
  } ,
} ;

export default grammar.from( { root , start , eof , productions } ) ;
