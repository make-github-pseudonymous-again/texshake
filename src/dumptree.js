export function dumptree ( tree ) {
  let out = '';
  for ( const child of tree.children ) {
    if ( child.type === 'leaf' ) out += child.buffer ;
    else out += dumptree(child) ;
  }
  return out;
}
