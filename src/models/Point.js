class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    const { x, y } = this;
    return `${x},${y}`;
  }
}

export default Point;
