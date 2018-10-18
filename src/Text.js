import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Text extends Component {
  static propTypes = {
    anchor: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.objectOf(PropTypes.string),
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    anchor: "middle",
    classes: { text: "" }
  };

  render() {
    const { anchor, children, className, classes, x, y } = this.props;
    return (
      <text
        className={classNames(className, classes.text)}
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
