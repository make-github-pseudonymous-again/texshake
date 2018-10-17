import { ast } from '@aureooms/js-grammar' ;

import grammar from '../grammar' ;

const t = ast.transform ;
const cmap = ast.cmap ;
const recurse = ( nonterminal , production ) => ( tree , match , ctx ) => ({
  "type" : "node" ,
  nonterminal ,
  production ,
  "children" : cmap( async x => x.type === 'leaf' ? x : await t( x , match , ctx ) , tree.children ) ,
}) ;


// move to @js-grammar/ast.visitor
function generateVisitor ( grammar ) {

  const transform = { } ;

  for ( const [ nonterminal , productions ] of grammar.productions.entries() ) {
    const nonterminalTransform = { } ;

    for ( const production of productions.keys() ) {
      nonterminalTransform[production] = recurse( nonterminal , production ) ;
    }

    transform[nonterminal] = nonterminalTransform ;
  }

  return transform ;

}

export default generateVisitor( grammar ) ;
