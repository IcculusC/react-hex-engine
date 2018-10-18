class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    const { x, y } = this;
    return `${x},${y}`;
  }

  toJSON() {
    const { x, y } = this;
    return { x, y };
  }

  static fromJSON(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }
}

export default Point;
