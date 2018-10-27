import React from "react";
import renderer from "react-test-renderer";

import HexEngine from "../../src/HexEngine";
import Path from "../../src/Path";

test("Path should render correctly", () => {
  const tree = renderer
    .create(
      <HexEngine
        classes={{ layout: "test1" }}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Path start={{ q: 1, r: 1, s: -1 }} end={{ q: 0, r: 0, s: 0 }} />
      </HexEngine>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Path should render correctly without an end hex", () => {
  const tree = renderer
    .create(
      <HexEngine
        classes={{ layout: "test2" }}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Path start={{ q: 1, r: 1, s: -1 }} />
      </HexEngine>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
