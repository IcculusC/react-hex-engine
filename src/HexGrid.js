import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ViewBoxProvider } from "./Context";

class HexGrid extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
    height: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    viewBox: PropTypes.objectOf(PropTypes.number)
  };

  static defaultProps = {
    classes: { grid: "" },
    height: 600,
    width: 800,
    viewBox: {
      height: 100,
      width: 100,
      x: -50,
      y: -50
    }
  };

  render() {
    const { children, classes, height, viewBox, width } = this.props;
    return (
      <svg
        className={classNames("grid", classes.grid)}
        height={height}
        version="1.1"
        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ViewBoxProvider value={viewBox}>{children}</ViewBoxProvider>
      </svg>
    );
  }
}

export default HexGrid;
