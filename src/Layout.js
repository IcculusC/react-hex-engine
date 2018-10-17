import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import memoize from "memoize-one";
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

  filterChildren = memoize((children, layout, viewBox) => {
    const childrenArray = React.Children.toArray(children);
    const { height, width, x, y } = viewBox;
    const cornerCoords = Layout.calculateCoordinates(
      layout.orientation,
      layout.size
    );
    return childrenArray.filter(child => {
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
  });

  render() {
    const {
      flat,
      children,
      classes,
      className,
      size,
      viewBox,
      ...rest
    } = this.props;
    const orientation = flat ? Orientation.Flat : Orientation.Pointy;
    const points = Layout.calculateCoordinates(orientation, size)
      .map(point => point.toString())
      .join(" ");
    const layout = { orientation, size, ...rest };
    const inBounds = this.filterChildren(children, layout, viewBox);
    return (
      <LayoutProvider value={{ layout, points }}>
        <g className={classNames(className, classes.layout)}>{inBounds}</g>
      </LayoutProvider>
    );
  }
}

export default withViewBox(Layout);
