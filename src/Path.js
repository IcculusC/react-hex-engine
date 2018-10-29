import React, { useContext } from "react";
import PropTypes from "prop-types";
import HexUtils from "./HexUtils";
import { HexEngineContext } from "./Context";

function getPoints(start, end, layout) {
  if (!end || !start) {
    return "";
  }

  const distance = HexUtils.distance(start, end);
  const step = 1.0 / Math.max(distance, 1);
  const points = [...Array(distance + 1).keys()]
    .map(i => {
      const hex = HexUtils.round(HexUtils.hexLerp(start, end, step * i));
      const pixel = HexUtils.hexToPixel(hex, layout);
      return ` ${pixel.x},${pixel.y} `;
    })
    .join("L");

  return `M${points}`;
}

export const Path = ({ start, end }) => {
  const { layout } = useContext(HexEngineContext);
  return <path d={getPoints(start, end, layout)} />;
};

Path.propTypes = {
  end: PropTypes.object,
  layout: PropTypes.object,
  start: PropTypes.object
};

export const Path_ = Path;
export default Path_;
