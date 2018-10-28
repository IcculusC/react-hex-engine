import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import GridGenerator from "../src/GridGenerator";
import Hex from "../src/models/Hex";
import Hexagon from "../src/Hexagon";
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

storiesOf("Hexagon", module)
  .add("Hover, Select", () => (
    <HexEngine>
      <SelectableHexagon
        q={0}
        r={0}
        s={0}
        classes={{
          hovered: "hovered",
          selected: "selected"
        }}
      />
    </HexEngine>
  ))
  .add("Show Coordinates", () => (
    <HexEngine>
      <Hexagon
        q={0}
        r={0}
        s={0}
        showCoordinates
        classes={{ hexagon: "showCoordinates" }}
      />
    </HexEngine>
  ))
  .add("With Text", () => (
    <HexEngine>
      <Hexagon
        q={0}
        r={0}
        s={0}
        classes={{ hexagon: "withText" }}
        text="hexagons"
      />
    </HexEngine>
  ));
