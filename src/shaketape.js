import { ll1 , ast } from '@aureooms/js-grammar' ;
import tape from '@aureooms/js-tape' ;

import tokens from './tokens' ;
import grammar from './grammar' ;
import shaker from './shaker' ;

export default async function shaketape ( inputTape , outputStream ) {

  const parser = ll1.from(grammar);
  const inputTokens = tokens(inputTape) ;
  const inputTokensTape = tape.fromAsyncIterable(inputTokens);
  const tree = await parser.parse(inputTokensTape) ;

  const ctx = { args : [ ] , variables : new Map() } ;
  const transformed = await ast.transform( tree , shaker , ctx ) ;
  const flattened = ast.flatten( transformed ) ;

  for await ( const leaf of flattened ) outputStream.write(leaf.buffer) ;

}
