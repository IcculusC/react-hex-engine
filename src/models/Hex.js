class Hex {
  constructor(q, r, s, meta = {}) {
    this.q = q;
    this.r = r;
    if (s !== undefined) {
      if (typeof s === "number") {
        this.s = s;
        this.meta = meta;
      } else if (typeof s === "object") {
        this.s = -q - r;
        this.meta = s;
      }
    } else {
      this.s = -q - r;
      this.meta = {};
    }
  }

  setMeta(update = {}) {
    this.meta = { ...this.meta, ...this.updates };
    return this;
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
    const { meta, q, r } = obj;
    return new Hex(q, r, meta);
  }
}

export default Hex;
