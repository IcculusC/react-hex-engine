import React, { useMutationEffect, useState } from "react";
import PropTypes from "prop-types";
import Flatbush from "flatbush";
import Hex from "./models/Hex";
import HexEngine from "./HexEngine";
import HexUtils from "./HexUtils";
import Orientation from "./models/Orientation";
import Point from "./models/Point";

const IndexedEngine = ({
  children,
  flat,
  map,
  origin,
  size,
  spacing,
  viewBox,
  ...props
}) => {
  const orientation = flat ? Orientation.Flat : Orientation.Pointy;
  const layout = { orientation, origin, size, spacing };
  const [visible, updateVisible] = useState([]);
  const [index, setIndex] = useState(() => new Flatbush(map.length));

  useMutationEffect(
    () => {
      console.log("new index effect");
      setIndex(() => new Flatbush(map.length));
    },
    [map.length, orientation, origin, spacing, size]
  );
  useMutationEffect(
    () => {
      console.log("populate index effect");
      map.forEach(hex => {
        const point = HexUtils.hexToPixel(hex, layout);
        index.add(
          point.x - layout.size.x / 2,
          point.y - layout.size.y / 2 - 1,
          point.x + layout.size.x / 2 + 1,
          point.y + layout.size.y / 2 + 1
        );
      });
      index.finish();
    },
    [index]
  );
  useMutationEffect(
    () => {
      console.log("update visible effect");
      updateVisible(() =>
        index
          .search(
            viewBox.x,
            viewBox.y,
            viewBox.x + viewBox.width,
            viewBox.y + viewBox.height
          )
          .map(i => map[i])
      );
      console.log(visible.length);
    },
    [viewBox, index]
  );

  return (
    <HexEngine {...layout} {...props}>
      {children(visible)}
    </HexEngine>
  );
};

IndexedEngine.propTypes = {
  children: PropTypes.func.isRequired,
  /** Determines if the hexagons are oriented with a point or an edge facing up */
  flat: PropTypes.bool,
  map: PropTypes.arrayOf(PropTypes.instanceOf(Hex)).isRequired,
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
  /** The viewBox {x,y,width,height} of the svg view area */
  viewBox: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
};

IndexedEngine.defaultProps = {
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

export const IndexedEngine_ = IndexedEngine;
export default IndexedEngine_;
