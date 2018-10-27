import React, { Component } from "react";
import PropTypes from "prop-types";
import HexUtils from "./HexUtils";
import { withHexEngine } from "./Context";

class Path extends Component {
  static propTypes = {
    end: PropTypes.object,
    layout: PropTypes.object,
    start: PropTypes.object
  };

  // TODO Refactor
  getPoints() {
    const { end, layout, start } = this.props;
    if (!end || !start) {
      return "";
    }

    // Get all the intersecting hexes between start and end points
    const distance = HexUtils.distance(start, end);
    const intersects = [];
    const step = 1.0 / Math.max(distance, 1);
    for (let i = 0; i <= distance; i++) {
      intersects.push(HexUtils.round(HexUtils.hexLerp(start, end, step * i)));
    }

    // Construct Path points out of all the intersecting hexes (e.g. M 0,0 L 10,20, L 30,20)
    let points = "M";
    points += intersects
      .map(hex => {
        let p = HexUtils.hexToPixel(hex, layout);
        return ` ${p.x},${p.y} `;
      })
      .join("L");

    return points;
  }

  render() {
    return <path d={this.getPoints()} />;
  }
}

export default withHexEngine(Path);
