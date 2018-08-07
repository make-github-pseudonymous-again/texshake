export default class Position {

  constructor ( line , position ) {
    this.line = line ;
    this.position = position ;
  }

  toString ( ) {
    return `${this.line}:${this.position}` ;
  }

}
