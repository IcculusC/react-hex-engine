import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { HexEngineProvider } from "./Context";
import Point from "./models/Point";
import Orientation from "./models/Orientation";

function getPointOffset(corner, orientation, size) {
  let angle = (2.0 * Math.PI * (corner + orientation.startAngle)) / 6;
  return new Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
}

function calculateCoordinates(orientation, size) {
  const center = new Point(0, 0);
  return [...Array(6).keys()].map((_, i) => {
    const offset = getPointOffset(i, orientation, size);
    return new Point(center.x + offset.x, center.y + offset.y);
  });
}

const HexEngine = props => {
  const {
    children,
    classes,
    flat,
    height,
    origin,
    size,
    spacing,
    viewBox,
    width
  } = props;

  const orientation = flat ? Orientation.Flat : Orientation.Pointy;
  const [points, setPoints] = useState(
    calculateCoordinates(orientation, size)
      .map(point => point.toString())
      .join(" ")
  );
  useEffect(
    () => {
      setPoints(() =>
        calculateCoordinates(orientation, size)
          .map(point => point.toString())
          .join(" ")
      );
    },
    [orientation, size]
  );
  const layout = { orientation, origin, size, spacing };

  return (
    <svg
      key={JSON.stringify(layout)}
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
};

HexEngine.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
  /** Determines if the hexagons are oriented with a point or an edge facing up */
  flat: PropTypes.bool,
  /** CSS string or number */
  height: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  /** Origin of the grid */
  origin: PropTypes.oneOfType([
    PropTypes.instanceOf(Point),
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ]),
  /** Size of the hexagons in each dimension */
  size: PropTypes.oneOfType([
    PropTypes.instanceOf(Point),
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ]),
  /** Space between hexagons */
  spacing: PropTypes.number,
  /** CSS string or number */
  width: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  /** The viewBox {x,y,width,height} of the svg view area */
  viewBox: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
};

HexEngine.defaultProps = {
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

export const HexEngine_ = HexEngine;
export default HexEngine_;
