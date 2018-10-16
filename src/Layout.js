import React, { Component } from "react";
import PropTypes from "prop-types";
import HexUtils from "./HexUtils";
import Orientation from "./models/Orientation";
import Point from "./models/Point";
import Hexagon from "./Hexagon/Hexagon";
import { LayoutProvider, withViewBox } from "./Context";

export const LAYOUT_FLAT = new Orientation(
  3.0 / 2.0,
  0.0,
  Math.sqrt(3.0) / 2.0,
  Math.sqrt(3.0),
  2.0 / 3.0,
  0.0,
  -1.0 / 3.0,
  Math.sqrt(3.0) / 3.0,
  0.0
);
export const LAYOUT_POINTY = new Orientation(
  Math.sqrt(3.0),
  Math.sqrt(3.0) / 2.0,
  0.0,
  3.0 / 2.0,
  Math.sqrt(3.0) / 3.0,
  -1.0 / 3.0,
  0.0,
  2.0 / 3.0,
  0.5
);

export class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flat: PropTypes.bool,
    origin: PropTypes.object,
    size: PropTypes.object,
    spacing: PropTypes.number
  };

  static defaultProps = {
    size: new Point(10, 10),
    flat: true,
    spacing: 1.0,
    origin: new Point(0, 0)
  };

  static getPointOffset(corner, orientation, size) {
    let angle = (2.0 * Math.PI * (corner + orientation.startAngle)) / 6;
    return new Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
  }

  // TODO Refactor
  static calculateCoordinates(orientation, size) {
    const corners = [];
    const center = new Point(0, 0);

    Array.from(new Array(6), (x, i) => {
      const offset = Layout.getPointOffset(i, orientation, size);
      const point = new Point(center.x + offset.x, center.y + offset.y);
      return corners.push(point);
    });

    return corners;
  }

  static filterChildren(children, viewBox, layout) {
    const { x, y, width, height } = viewBox;
    const cornerCoords = Layout.calculateCoordinates(
      layout.orientation,
      layout.size
    );
    return children.filter(child => {
      if (!child.props) {
        return true;
      }
      if (
        child.type === Hexagon ||
        (child.props.q !== undefined &&
          child.props.r !== undefined &&
          child.props.s !== undefined)
      ) {
        const point = HexUtils.hexToPixel(child.props, layout);
        const corners = cornerCoords.map(
          coord => new Point(coord.x + point.x, coord.y + point.y)
        );
        const filtered = corners.filter(
          corner =>
            corner.x > x &&
            corner.x < width + x &&
            corner.y > y &&
            corner.y < +height + y
        );
        return filtered.length;
      }
      return true;
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const children = React.Children.toArray(nextProps.children);
    if (
      prevState.viewBox !== nextProps.viewBox ||
      prevState.childCount !== children.length
    ) {
      const { flat, viewBox, ...rest } = nextProps;
      const orientation = flat ? LAYOUT_FLAT : LAYOUT_POINTY;
      const layout = { ...rest, orientation };

      return {
        childCount: children.length,
        inBounds: Layout.filterChildren(children, viewBox, layout),
        viewBox
      };
    }
    return null;
  }

  state = { childCount: 0, inBounds: [], viewBox: {} };

  render() {
    const { flat, className, size, viewBox, ...rest } = this.props;
    const { inBounds } = this.state;
    const orientation = flat ? LAYOUT_FLAT : LAYOUT_POINTY;
    const points = Layout.calculateCoordinates(orientation, size)
      .map(point => `${point.x},${point.y}`)
      .join(" ");
    const layout = { ...rest, orientation, size };
    return (
      <LayoutProvider value={{ layout, points }}>
        <g className={className}>{inBounds}</g>
      </LayoutProvider>
    );
  }
}

export default withViewBox(Layout);
