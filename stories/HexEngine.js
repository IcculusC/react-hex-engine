import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number, object } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import GridGenerator from "../src/GridGenerator";
import Hexagon, { Hexagon_ } from "../src/Hexagon";
import HexEngine from "../src/HexEngine";
import Point from "../src/models/Point";
import IndexedEngine from "../src/IndexedEngine";
import "./Hexagon.css";

Hexagon.displayName = "Hexagon";
Hexagon_.displayName = "Hexagon";
HexEngine.displayName = "HexEngine";

const stories = storiesOf("HexEngine", module);

stories.addDecorator(withKnobs);

stories.addDecorator(
  withInfo({
    header: false,
    inline: true,
    maxPropStringLength: 512,
    source: true,
    propTablesExclude: [Hexagon_, Hexagon]
  })
);

stories
  .add(
    "Kitchen Sink",
    () => {
      const flat = boolean("flat", true, "HexEngine");
      const size = object("size", { x: 10, y: 10 }, "HexEngine");
      const origin = object("origin", { x: 0, y: 0 }, "HexEngine");
      const spacing = number("spacing", 1.0, {}, "HexEngine");
      const width = number("width", 320, {}, "HexEngine");
      const height = number("height", 240, {}, "HexEngine");
      const viewBox = object(
        "viewBox",
        { x: -30, y: -30, width: 60, height: 60 },
        "HexEngine"
      );

      return (
        <HexEngine
          width={width}
          height={height}
          viewBox={viewBox}
          flat={flat}
          size={size}
          origin={origin}
          spacing={spacing}
        >
          {GridGenerator.hexagon(1).map(hex => (
            <Hexagon {...hex} key={hex.toString()} />
          ))}
        </HexEngine>
      );
    },
    {
      info: {
        propTables: [HexEngine]
      }
    }
  )
  .add("non zero origin", () => (
    <HexEngine
      origin={new Point(-5, -5)}
      width={320}
      height={240}
      viewBox={{ x: -30, y: -30, width: 60, height: 60 }}
    >
      <Hexagon q={0} r={0} s={0} />
    </HexEngine>
  ))
  .add("pointy orientation", () => (
    <HexEngine
      flat={false}
      width={320}
      height={240}
      viewBox={{
        x: -25,
        y: -25,
        width: 50,
        height: 50
      }}
    >
      <Hexagon q={0} r={0} s={0} />
    </HexEngine>
  ))
  .add("bigger size", () => (
    <HexEngine
      size={new Point(30, 30)}
      width={320}
      height={240}
      viewBox={{ x: -30, y: -30, width: 60, height: 60 }}
    >
      <Hexagon q={0} r={0} s={0} />
    </HexEngine>
  ))
  .add("smaller size", () => (
    <HexEngine
      size={new Point(3, 3)}
      width={320}
      height={240}
      viewBox={{ x: -30, y: -30, width: 60, height: 60 }}
    >
      <Hexagon q={0} r={0} s={0} />
    </HexEngine>
  ))
  .add("irregular proportions", () => (
    <HexEngine
      size={new Point(15, 5)}
      width={320}
      height={240}
      viewBox={{ x: -30, y: -30, width: 60, height: 60 }}
    >
      <Hexagon q={0} r={0} s={0} />
    </HexEngine>
  ))
  .add("spacing", () => (
    <HexEngine
      spacing={1.05}
      width={320}
      height={240}
      viewBox={{ x: -30, y: -30, width: 60, height: 60 }}
    >
      <Hexagon q={-1} r={0} s={1} />
      <Hexagon q={0} r={0} s={0} />
      <Hexagon q={1} r={0} s={-1} />
    </HexEngine>
  ))
  .add("indexed", () => {
    const viewBox = object(
      "viewBox",
      { x: -50, y: -50, width: 100, height: 100 },
      "HexEngine"
    );
    const map = GridGenerator.hexagon(50);
    const classes = {
      hexagon: "showCoordinates text",
      highlighted: "highlighted",
      hovered: "hovered",
      selected: "selected",
      q: "axis",
      r: "axis",
      s: "axis",
      text: "text"
    };
    return (
      <IndexedEngine
        height={400}
        map={map}
        viewBox={viewBox}
        width={400}
        spacing={1.05}
      >
        {hexes =>
          hexes.map(hex => (
            <Hexagon
              {...hex}
              classes={classes}
              showCoordinates
              selected={Math.random() > 0.5}
            />
          ))
        }
      </IndexedEngine>
    );
  });
