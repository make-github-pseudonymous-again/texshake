import { ll1 , ast } from '@aureooms/js-grammar' ;
import tape from '@aureooms/js-tape' ;

import tokens from './tokens' ;
import grammar from './grammar' ;
import shaker from './shaker' ;

export default async function shaketape ( inputTape , outputStream ) {

  const parser = ll1.from(grammar);
  const inputTokens = tokens(inputTape) ;
  const inputTokensTape = tape.fromAsyncIterable(inputTokens);
  const tree = parser.parse(inputTokensTape) ;

  const defaults = [
    ['true', true],
    ['false', false],
  ] ;

  const ctx = { args : [ ] , variables : new Map(defaults) } ;
  const transformed = await ast.transform( tree , shaker , ctx ) ;
  const flattened = ast.flatten( transformed ) ;

  for await ( const leaf of flattened ) {
    if ( leaf.terminal === grammar.eof ) break ;
    outputStream.write(leaf.buffer) ;
  }

}
