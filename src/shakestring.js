import { iter , list , map } from '@aureooms/js-itertools' ;
import { ll1 , ast } from '@aureooms/js-grammar' ;
import * as stream from '@aureooms/js-stream' ;
import { tokens } from './tokens' ;
import { G } from './grammar' ;
import { shake } from './shake' ;

export function shakestring ( string , out ) {

  const parser = ll1.from(G);
  const mystream = stream.fromiterable(tokens(string));
  let tree = parser.parse(mystream) ;
  tree = ast.materialize( tree ) ;

  const ctx = { args : [ ] , variables : new Map() } ;
  const transformed = ast.transform( tree , shake , ctx ) ;

  for ( const leaf of ast.flatten( transformed ) ) out.write(leaf.buffer) ;

}
