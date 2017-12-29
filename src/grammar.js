export const grammar = [
  [ // blocks : 0
    [ 1 , 0 ] , // 0.0
    [ ] , // 0.1
  ] ,
  [ // block : 1
    [ 'text' ] , // 1.0
    [ 'newif' , 'ifcmd' ] , // 1.1
    [ 'ifcmd' , 0 , 2 ] , // 1.2
    [ 'falsecmd' ] , // 1.3
    [ 'truecmd' ] , // 1.4
    [ 'comment' ] , // 1.5
    [ 'othercmd' , 5 , 6 , 7 ] , // 1.6
    [ 'def' , 'othercmd' , '{' , 0 , '}' ] , // 1.7
    [ 'newcommand' , 3 ] , // 1.8
    [ '{' , 0 , '}' ] , // 1.9
    [ '[' , 0 , ']' ] , // 1.10
    [ '*' ] , // 1.11
    [ 'arg' ] , // 1.12
  ] ,
  [ // endif : 2
    [ 'else' , 0 , 'fi' ] , // 2.0
    [ 'fi' ] , // 2.1
  ] ,
  [ // command definition 3
    [ '{' , 'othercmd' , '}' , 4 , '{' , 0 , '}' ] , // 3.0
    [ 'othercmd' , 4 , '{' , 0 , '}' ] , // 3.1
    [ '*' , 'othercmd' , 4 , '{' , 0 , '}' ] , // 3.2
  ] ,
  [ // command definition arguments 4
    [ '[' , 'text' , ']' ] , // 4.0
    [ ] // 4.1
  ] ,
  [ // othercmd star : 5
    [ '*' ] , // 5.0
    [ ] , // 5.1
  ] ,
  [ // othercmd optional arguments 6
    [ '[' , 0 , ']' ] , // 6.0
    [ ] // 6.1
  ] ,
  [ // othercmd arguments : 7
    [ '{' , 0 , '}' , 7 ] , // 7.0
    [ ] , // 7.1
  ] ,
] ;
