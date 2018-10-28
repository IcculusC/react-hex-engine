import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number, object } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import GridGenerator from "../src/GridGenerator";
import Hexagon, { Hexagon_ } from "../src/Hexagon";
import HexEngine from "../src/HexEngine";
import Point from "../src/models/Point";

Hexagon.displayName = "Hexagon";

const stories = storiesOf("HexEngine", module);

stories.addDecorator(withKnobs);

stories.addDecorator(
  withInfo({
    header: false,
    inline: true,
    maxPropStringLength: 512,
    propTablesExclude: [HexEngine, Hexagon_, Hexagon],
    source: true
  })
);

stories
  .add(
    "Kitchen Sink",
    () => {
      const flat = boolean("flat", false, "HexEngine");
      const size = object("size", { x: 10, y: 10 }, "HexEngine");
      const origin = object("origin", { x: 0, y: 0 }, "HexEngine");
      const spacing = number("spacing", 1.0, {}, "HexEngine");
      const width = number("width", 640, {}, "HexEngine");
      const height = number("height", 480, {}, "HexEngine");
      const viewBox = object(
        "viewBox",
        { x: -25, y: -25, width: 50, height: 50 },
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
  .add("One Lonely Hexagon", () => (
    <HexEngine width={320} height={240}>
      <Hexagon q={0} r={0} s={0} />
    </HexEngine>
  ))
  .add("Different Origin", () => (
    <HexEngine
      origin={new Point(15, 25)}
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
  .add("Pointy!", () => (
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
  .add("Bigger!", () => (
    <HexEngine
      size={new Point(15, 15)}
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
  .add("Smaller!", () => (
    <HexEngine
      size={new Point(5, 5)}
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
  .add("Oddly Proportioned!", () => (
    <HexEngine
      size={new Point(15, 5)}
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
  .add("Spacing!", () => (
    <HexEngine
      spacing={1.05}
      width={320}
      height={240}
      viewBox={{
        x: -25,
        y: -25,
        width: 50,
        height: 50
      }}
    >
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ));
