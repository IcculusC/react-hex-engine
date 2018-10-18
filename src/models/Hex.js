class Hex {
  constructor(q, r, s) {
    this.q = q;
    this.r = r;
    this.s = s;
  }

  toString() {
    const { q, r, s } = this;
    return `${q},${r},${s}`;
  }

  toJSON() {
    const { q, r, s } = this;
    return { q, r, s };
  }

  static fromJSON(obj) {
    const { q, r, s } = obj;
    return new Hex(q, r, s);
  }
}

export default Hex;
