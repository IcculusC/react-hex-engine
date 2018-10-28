import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Hexagon, { Hexagon_ } from "../src/Hexagon";
import HexEngine from "../src/HexEngine";
import "./Hexagon.css";

class SelectableHexagon extends React.Component {
  state = { selected: false };

  onClick = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { hex, ...rest } = this.props;
    const { selected } = this.state;

    return (
      <Hexagon {...hex} {...rest} selected={selected} onClick={this.onClick} />
    );
  }
}

const stories = storiesOf("Hexagon", module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add(
  "Kitchen Sink",
  () => {
    const selectable = boolean("selectable", true, "Hexagon");
    const highlighted = boolean("highlighted", false, "Hexagon");
    const hoverable = boolean("hoverable", true, "Hexagon");
    const innerText = text("text", "", "Hexagon");
    const showCoordinates = boolean("showCoordinates", false, "Hexagon");

    const size = object("size", { x: 10, y: 10 }, "Engine");

    return (
      <HexEngine
        size={size}
        width={320}
        height={240}
        viewBox={{
          x: -25,
          y: -25,
          width: 50,
          height: 50
        }}
      >
        <SelectableHexagon
          q={0}
          r={0}
          s={0}
          selectable={selectable}
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
        />
      </HexEngine>
    );
  },
  {
    info: {
      header: false,
      inline: true,
      maxPropStringLength: 512,
      propTables: [Hexagon_],
      propTablesExclude: [SelectableHexagon, HexEngine],
      source: false
    }
  }
);
