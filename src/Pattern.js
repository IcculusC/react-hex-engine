import React from "react";
import PropTypes from "prop-types";
import Point from "./models/Point";

const Pattern = ({ id, link, size }) => (
  <defs>
    <pattern
      height={size.y}
      id={id}
      patternUnits="objectBoundingBox"
      width={size.x}
      x={0}
      y={0}
    >
      <image
        height={size.y * 2}
        width={size.x * 2}
        x={0}
        xlinkHref={link}
        y={0}
      />
    </pattern>
  </defs>
);

Pattern.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.object
};
Pattern.defaultProps = {
  size: new Point(10, 10)
};

export const Pattern_ = Pattern;
export default Pattern_;
