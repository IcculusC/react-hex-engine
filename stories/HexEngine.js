import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import GridGenerator from "../src/GridGenerator";
import Hexagon, { Hexagon_ } from "../src/Hexagon";
import HexEngine from "../src/HexEngine";
import Point from "../src/models/Point";

const stories = storiesOf("HexEngine", module);

stories.addDecorator(
  withInfo({
    header: false,
    inline: true,
    maxPropStringLength: 512,
    propTables: [HexEngine],
    propTablesExclude: [Hexagon_, Hexagon],
    source: false
  })
);

stories
  .add("One Lonely Hexagon", () => (
    <HexEngine
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
