import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Hexagon from "./Hexagon/Hexagon";
import HexUtils from "./HexUtils";
import Orientation from "./models/Orientation";
import Point from "./models/Point";
import { LayoutProvider, withViewBox } from "./Context";

export class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    classes: PropTypes.objectOf(PropTypes.string),
    flat: PropTypes.bool,
    origin: PropTypes.object,
    size: PropTypes.object,
    spacing: PropTypes.number
  };

  static defaultProps = {
    className: "",
    classes: { layout: "" },
    flat: true,
    origin: new Point(0, 0),
    size: new Point(10, 10),
    spacing: 1.0
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

  static filterChildren(children, layout, viewBox) {
    const { height, width, x, y } = viewBox;
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
        (typeof child.props.q !== "number" &&
          typeof child.props.r !== "number" &&
          typeof child.props.s !== "number")
      ) {
        const point = HexUtils.hexToPixel(child.props, layout);
        const corners = cornerCoords.map(
          coord => new Point(coord.x + point.x, coord.y + point.y)
        );
        return corners.filter(
          corner =>
            corner.x > x &&
            corner.x < width + x &&
            corner.y > y &&
            corner.y < +height + y
        ).length;
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
      const orientation = flat ? Orientation.Flat : Orientation.Pointy;
      const layout = { orientation, ...rest };

      return {
        childCount: children.length,
        inBounds: Layout.filterChildren(children, layout, viewBox),
        viewBox
      };
    }
    return null;
  }

  state = { childCount: 0, inBounds: [], viewBox: {} };

  render() {
    const { flat, classes, className, size, viewBox, ...rest } = this.props;
    const { inBounds } = this.state;
    const orientation = flat ? Orientation.Flat : Orientation.Pointy;
    const points = Layout.calculateCoordinates(orientation, size)
      .map(point => point.toString())
      .join(" ");
    const layout = { orientation, size, ...rest };
    return (
      <LayoutProvider value={{ layout, points }}>
        <g className={classNames(className, classes.layout)}>{inBounds}</g>
      </LayoutProvider>
    );
  }
}

export default withViewBox(Layout);
