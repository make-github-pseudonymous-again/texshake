import { next } from '@aureooms/js-itertools' ;
import { match } from './match' ;

export function decorate ( it , tree ) { // modifies tree in place
  let children = [ ] ;
  for ( const child of tree.children ) {
    if ( typeof child === 'string' ) {
      const [ token , buffer ] = next(it);
      match( token , child ) ;
      children.push({ 'type' : 'leaf' , 'token' : token , 'buffer' : buffer });
    }
    else {
      children.push(decorate( it , child )) ;
    }
  }
  tree.children = children;
  tree.type = 'internal' ;
  return tree;
}
