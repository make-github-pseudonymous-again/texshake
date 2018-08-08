import tape from '@aureooms/js-tape' ;
import shaketape from './shaketape' ;

export default async function shakestream ( inputStream , outputStream ) {

  const inputCharacterTape = tape.fromReadStream( inputStream );

  await shaketape( inputCharacterTape , outputStream ) ;

}
