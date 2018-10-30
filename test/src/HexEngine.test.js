import React from "react";
import renderer from "react-test-renderer";
import Hex from "../../src//models/Hex";
import Hexagon from "../../src/Hexagon";
import HexEngine from "../../src/HexEngine";
import IndexedEngine from "../../src/IndexedEngine";

describe("HexEngine", () => {
  it("HexEngine should render correctly with default props", () => {
    const tree = renderer
      .create(
        <HexEngine classes={{ layout: "test1" }}>
          <Hexagon q={0} r={0} s={0} />
        </HexEngine>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("HexEngine should render correctly with pointy orientation", () => {
    const tree = renderer
      .create(
        <HexEngine classes={{ layout: "test1" }} flat={false}>
          <Hexagon q={0} r={0} s={0} />
        </HexEngine>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("IndexedEngine", () => {
  it("IndexedEngine should render correctly with default props", () => {
    const map = [
      new Hex(-4, 0, 0),
      new Hex(-3, 0, 0),
      new Hex(-2, 0, 0),
      new Hex(-1, 0, 0),
      new Hex(0, 0, 0),
      new Hex(1, 0, 0),
      new Hex(2, 0, 0),
      new Hex(3, 0, 0),
      new Hex(4, 0, 0)
    ];

    const tree = renderer
      .create(
        <IndexedEngine map={map} classes={{ layout: "test1" }}>
          {hexes => hexes.map(hex => <Hexagon {...hex} />)}
        </IndexedEngine>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
