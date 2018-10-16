import React, { Component } from "react";
import PropTypes from "prop-types";
import Point from "./models/Point";

class Pattern extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    size: PropTypes.object
  };
  static defaultProps = {
    size: new Point(10, 10)
  };

  render() {
    const { id, link, size } = this.props;

    return (
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
  }
}

export default Pattern;
