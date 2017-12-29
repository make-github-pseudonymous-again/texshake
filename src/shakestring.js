import { iter , list , map } from '@aureooms/js-itertools' ;
import { ll1 } from '@aureooms/js-grammar' ;
import * as stream from '@aureooms/js-stream' ;
import { tokens } from './tokens' ;
import { grammar } from './grammar' ;
import { decorate } from './decorate' ;
import { shake } from './shake' ;

export function shakestring ( string , out ) {
  const table = ll1.compile(0, grammar);
  const mytokens = list(tokens(string));
  const mystream = stream.fromiterable(map(([a,b]) => a, mytokens));
  const ast = ll1.parse(0, grammar, table, mystream).children[0];
  decorate(iter(mytokens), ast);
  shake(out, ast, new Map(), []);
}
