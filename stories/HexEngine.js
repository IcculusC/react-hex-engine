import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import GridGenerator from "../src/GridGenerator";
import Hexagon from "../src/Hexagon";
import HexEngine from "../src/HexEngine";
import Point from "../src/models/Point";

storiesOf("HexEngine", module)
  .add("One Lonely Hexagon", () => (
    <HexEngine>
      <Hexagon q={0} r={0} s={0} />
    </HexEngine>
  ))
  .add("Radius 1", () => (
    <HexEngine>
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ))
  .add("Different Origin", () => (
    <HexEngine origin={new Point(15, 25)}>
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ))
  .add("Pointy!", () => (
    <HexEngine flat={false}>
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ))
  .add("Bigger!", () => (
    <HexEngine size={new Point(15, 15)}>
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ))
  .add("Smaller!", () => (
    <HexEngine size={new Point(5, 5)}>
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ))
  .add("Oddly Proportioned!", () => (
    <HexEngine size={new Point(15, 5)}>
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ))
  .add("Spacing!", () => (
    <HexEngine spacing={1.5}>
      {GridGenerator.hexagon(1).map(hex => (
        <Hexagon {...hex} key={hex.toString()} />
      ))}
    </HexEngine>
  ));
/*
  .add("Boring Shapes", () => (
    <React.Fragment>
      <HexEngine width={200} height={200} size={new Point(5, 5)}>
        {GridGenerator.spiral(new Hex(0, 0, 0), 2).map(hex => (
          <Hexagon {...hex} key={hex.toString()} />
        ))}
        <text
          fill="black"
          textAnchor="middle"
          x={0}
          y={-35}
          fontSize={10}
          fontFamily="sans-serif"
        >
          spiral
        </text>
      </HexEngine>
      <HexEngine width={200} height={200} size={new Point(5, 5)}>
        {GridGenerator.ring(new Hex(0, 0, 0), 2).map(hex => (
          <Hexagon {...hex} key={hex.toString()} />
        ))}
        <text
          fill="black"
          textAnchor="middle"
          x={0}
          y={-35}
          fontSize={10}
          fontFamily="sans-serif"
        >
          ring
        </text>
      </HexEngine>
      <HexEngine width={200} height={200} size={new Point(5, 5)}>
        {GridGenerator.parallelogram(0, 3, 0, 2).map(hex => (
          <Hexagon {...hex} key={hex.toString()} />
        ))}
        <text
          fill="black"
          textAnchor="middle"
          x={0}
          y={-35}
          fontSize={10}
          fontFamily="sans-serif"
        >
          parallelogram
        </text>
      </HexEngine>
      <HexEngine width={200} height={200} size={new Point(5, 5)}>
        {GridGenerator.triangle(3).map(hex => (
          <Hexagon {...hex} key={hex.toString()} />
        ))}
        <text
          fill="black"
          textAnchor="middle"
          x={0}
          y={-35}
          fontSize={10}
          fontFamily="sans-serif"
        >
          triangle
        </text>
      </HexEngine>
      <HexEngine width={200} height={200} size={new Point(5, 5)}>
        {GridGenerator.rectangle(3, 3).map(hex => (
          <Hexagon {...hex} key={hex.toString()} />
        ))}
        <text
          fill="black"
          textAnchor="middle"
          x={0}
          y={-35}
          fontSize={10}
          fontFamily="sans-serif"
        >
          rectangle
        </text>
      </HexEngine>
      <HexEngine width={200} height={200} size={new Point(5, 5)}>
        {GridGenerator.orientedRectangle(3, 3).map(hex => (
          <Hexagon {...hex} key={hex.toString()} />
        ))}
        <text
          fill="black"
          textAnchor="middle"
          x={0}
          y={-35}
          fontSize={10}
          fontFamily="sans-serif"
        >
          oriented rectangle
        </text>
      </HexEngine>
    </React.Fragment>
  ));
  */
