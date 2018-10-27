import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { HexEngineProvider } from "./Context";
import Point from "./models/Point";
import Orientation from "./models/Orientation";

class HexEngine extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
    flat: PropTypes.bool,
    height: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    origin: PropTypes.oneOfType([
      PropTypes.instanceOf(Point),
      PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    ]),
    size: PropTypes.oneOfType([
      PropTypes.instanceOf(Point),
      PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    ]),
    spacing: PropTypes.number,
    width: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    viewBox: PropTypes.objectOf(PropTypes.number)
  };

  static defaultProps = {
    classes: { grid: "", layout: "" },
    flat: true,
    height: 480,
    origin: new Point(0, 0),
    size: new Point(10, 10),
    spacing: 1.0,
    width: 640,
    viewBox: {
      height: 100,
      width: 100,
      x: -50,
      y: -50
    }
  };

  static getPointOffset(corner, orientation, size) {
    let angle = (2.0 * Math.PI * (corner + orientation.startAngle)) / 6;
    return new Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
  }

  static calculateCoordinates(orientation, size) {
    const center = new Point(0, 0);
    return [...Array(6).keys()].map((_, i) => {
      const offset = HexEngine.getPointOffset(i, orientation, size);
      return new Point(center.x + offset.x, center.y + offset.y);
    });
  }

  render() {
    const {
      children,
      classes,
      flat,
      height,
      size,
      viewBox,
      width,
      ...rest
    } = this.props;

    const orientation = flat ? Orientation.Flat : Orientation.Pointy;
    const points = HexEngine.calculateCoordinates(orientation, size)
      .map(point => point.toString())
      .join(" ");
    const layout = { orientation, size, ...rest };

    return (
      <svg
        className={classNames("grid", classes.grid)}
        height={height}
        version="1.1"
        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <HexEngineProvider
          value={{
            layout,
            points,
            viewBox
          }}
        >
          <g className={classes.layout}>{children}</g>
        </HexEngineProvider>
      </svg>
    );
  }
}

export default HexEngine;
