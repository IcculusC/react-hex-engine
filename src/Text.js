import React from "react";
import PropTypes from "prop-types";

const Text = ({ anchor, children, classes, x, y }) => (
  <text
    className={classes.text}
    textAnchor={anchor}
    x={x || 0}
    y={y ? y : "0.3em"}
  >
    {children}
  </text>
);

Text.propTypes = {
  anchor: PropTypes.string,
  children: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Text.defaultProps = {
  anchor: "middle",
  classes: { text: "" }
};

export const Text_ = Text;
export default Text_;
