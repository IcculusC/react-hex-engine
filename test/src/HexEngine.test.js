import React from "react";
import renderer from "react-test-renderer";
import Hexagon from "../../src/Hexagon";
import HexEngine from "../../src/HexEngine";

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
