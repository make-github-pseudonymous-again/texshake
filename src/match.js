export function match ( token , terminal ) {
  if ( token !== terminal ) throw new Error(`Tokens do not match: '${token}' !== '${terminal}'`)
}
