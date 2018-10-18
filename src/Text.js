import React, { Component } from "react";
import PropTypes from "prop-types";

class Text extends Component {
  static propTypes = {
    anchor: PropTypes.string,
    children: PropTypes.string,
    classes: PropTypes.objectOf(PropTypes.string),
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    anchor: "middle",
    classes: { text: "" }
  };

  render() {
    const { anchor, children, classes, x, y } = this.props;
    return (
      <text
        className={classes.text}
        textAnchor={anchor}
        x={x || 0}
        y={y ? y : "0.3em"}
      >
        {children}
      </text>
    );
  }
}

export default Text;
