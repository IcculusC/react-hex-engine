import React from "react";
import { storiesOf } from "@storybook/react";
import addons from "@storybook/addons";
import Events from "@storybook/core-events";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Hexagon, { Hexagon_ } from "../src/Hexagon";
import HexEngine from "../src/HexEngine";
import Point from "../src/models/Point";
import { manager } from "@storybook/addon-knobs/dist/registerKnobs";
import "./Hexagon.css";

Hexagon.displayName = "Hexagon";
Hexagon_.displayName = "Hexagon";
HexEngine.displayName = "HexEngine";

const stories = storiesOf("Hexagon", module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add(
  "Kitchen Sink",
  () => {
    const selectable = boolean("selectable", true, "Hexagon");
    const selected = boolean("selected", false, "Hexagon");
    const highlighted = boolean("highlighted", false, "Hexagon");
    const hoverable = boolean("hoverable", true, "Hexagon");
    const showCoordinates = boolean("showCoordinates", false, "Hexagon");
    const innerText = text("text", "", "Hexagon");

    return (
      <HexEngine
        size={new Point(10, 10)}
        width={320}
        height={240}
        viewBox={{
          x: -25,
          y: -25,
          width: 50,
          height: 50
        }}
      >
        <Hexagon
          q={0}
          r={0}
          s={0}
          selectable={selectable}
          selected={selected}
          highlighted={highlighted}
          hoverable={hoverable}
          text={innerText}
          showCoordinates={showCoordinates}
          classes={{
            hexagon: "showCoordinates text",
            highlighted: "highlighted",
            hovered: "hovered",
            selected: "selected",
            q: "axis",
            r: "axis",
            s: "axis",
            text: "text"
          }}
          onClick={() => {
            const { knobStore } = manager;
            const knobOptions = knobStore.get("selected");
            knobOptions.value = !selected;
            knobStore.markAllUnused();
            addons.getChannel().emit(Events.FORCE_RE_RENDER);
          }}
        />
      </HexEngine>
    );
  },
  {
    info: {
      header: false,
      inline: true,
      maxPropStringLength: 512,
      propTables: [Hexagon_], // should be able to fix this with useContext in react 16.7.x
      propTablesExclude: [HexEngine, Hexagon],
      source: false,
      excludedPropTypes: [
        "data",
        "layout",
        "onDragEnd",
        "onDragOver",
        "onDragStart",
        "onDragStop",
        "onDrop",
        "points"
      ]
    }
  }
);
