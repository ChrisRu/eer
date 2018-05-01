export default class Pos {
  y: number;
  x: number;
  initialized: boolean;

  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
    this.initialized = x !== undefined && y !== undefined;
  }

  add(pos: Pos) {
    this.initialized = true;
    return Pos.Combine(this, pos);
  }

  equals(pos: Pos) {
    return pos && pos.x === this.x && pos.y === this.y;
  }

  static Combine(pos1: Pos, pos2: Pos) {
    return new Pos(pos1.x + pos2.x, pos1.y + pos2.y);
  }

  get props() {
    return { x: this.x, y: this.y };
  }
}
