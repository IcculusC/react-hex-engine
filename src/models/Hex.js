class Hex {
  constructor(q, r, s, meta = {}) {
    this.q = q;
    this.r = r;
    this.s = s;
    this.meta = {};
  }

  toString() {
    const { q, r, s } = this;
    return `${q},${r},${s}`;
  }

  toJSON() {
    const { meta, q, r, s } = this;
    return { meta, q, r, s };
  }

  static fromJSON(obj) {
    const { meta, q, r, s } = obj;
    return new Hex(q, r, s, meta);
  }
}

export default Hex;
