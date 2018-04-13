export default class Pos {
  y: number;
  x: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(pos: Pos) {
    return Pos.Combine(this, pos);
  }

  static Combine(pos1: Pos, pos2: Pos) {
    return new Pos(pos1.x + pos2.x, pos1.y + pos2.y);
  }
}
