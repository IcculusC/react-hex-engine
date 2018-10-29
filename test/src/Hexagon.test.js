import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import HexEngine from "../../src/HexEngine";
import Hexagon from "../../src/Hexagon";

test("Hexagon should render correctly with default props", () => {
  const tree = renderer
    .create(
      <HexEngine
        classes={{ layout: "test1" }}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Hexagon q={0} r={0} s={0}>
          <div>child</div>
        </Hexagon>
      </HexEngine>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Hexagon should render correctly with text", () => {
  const tree = renderer
    .create(
      <HexEngine
        classes={{ layout: "test1" }}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Hexagon q={0} r={0} s={0} text="test" />
      </HexEngine>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Hexagon should work", () => {
  let playDoh;
  const wrapper = mount(
    <HexEngine
      classes={{ layout: "layout" }}
      size={{ x: 6, y: 6 }}
      flat={false}
      spacing={1.1}
      origin={{ x: 0, y: 0 }}
    >
      <Hexagon
        q={0}
        r={0}
        s={0}
        fill={"#333"}
        classes={{ group: "test1" }}
        data={{ a: "b" }}
        onMouseEnter={() => {
          playDoh = "mouseEnter";
        }}
        onMouseOver={() => {
          playDoh = "mouseOver";
        }}
        onMouseLeave={() => {
          playDoh = "mouseLeave";
        }}
        onClick={() => {
          playDoh = "click";
        }}
        onDragStart={() => {
          playDoh = "dragStart";
        }}
        onDragEnd={() => {
          playDoh = "dragEnd";
        }}
        onDragOver={() => {
          playDoh = "dragOver";
        }}
        onDrop={() => {
          playDoh = "drop";
        }}
      >
        <div>child</div>
      </Hexagon>
    </HexEngine>
  );
  expect(wrapper.find("g.test1").length).toBe(1);

  wrapper.find("g.test1").simulate("mouseEnter");
  expect(playDoh).toBe("mouseEnter");

  wrapper.find("g.test1").simulate("mouseOver");
  expect(playDoh).toBe("mouseOver");

  wrapper.find("g.test1").simulate("mouseLeave");
  expect(playDoh).toBe("mouseLeave");

  wrapper.find("g.test1").simulate("click");
  expect(playDoh).toBe("click");
});

test("Hexagon should work", () => {
  let playDoh;
  const wrapper2 = mount(
    <HexEngine
      classes={{ layout: "layout" }}
      size={{ x: 6, y: 6 }}
      flat={false}
      spacing={1.1}
      origin={{ x: 0, y: 0 }}
    >
      <Hexagon q={0} r={0} s={0} classes={{ group: "test2" }}>
        <div>child</div>
      </Hexagon>
    </HexEngine>
  );
  expect(wrapper2.find("g.test2").length).toBe(1);

  wrapper2.find("g.test2").simulate("mouseEnter");
  expect(playDoh).toBe(undefined);

  wrapper2.find("g.test2").simulate("mouseOver");
  expect(playDoh).toBe(undefined);

  wrapper2.find("g.test2").simulate("mouseLeave");
  expect(playDoh).toBe(undefined);

  wrapper2.find("g.test2").simulate("click");
  expect(playDoh).toBe(undefined);
});
