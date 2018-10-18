import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import memoize from "memoize-one";
import Hex from "./models/Hex";
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

  static calculateCoordinates(orientation, size) {
    const center = new Point(0, 0);
    return [...Array(6).keys()].map((_, i) => {
      const offset = Layout.getPointOffset(i, orientation, size);
      return new Point(center.x + offset.x, center.y + offset.y);
    });
  }

  static filterViewBox(layout, viewBox) {
    const { height, width, x, y } = viewBox;
    const x_ = x - layout.size.x + layout.spacing + 1;
    const y_ = y - layout.size.y + layout.spacing + 1;
    const width_ = width + layout.size.x + layout.spacing + 1;
    const height_ = height + layout.size.y + layout.spacing + 1;

    return {
      x: x_,
      y: y_,
      width: width_,
      height: height_
    };
  }

  filterChildren = memoize((children, layout, viewBox) => {
    const childrenArray = React.Children.toArray(children);
    const { x, y, width, height } = Layout.filterViewBox(layout, viewBox);

    return childrenArray.filter(child => {
      if (!child.props) {
        return true;
      }
      if (
        child.props !== undefined &&
        child.props.q !== undefined &&
        child.props.r !== undefined &&
        child.props.s !== undefined
      ) {
        const { q, r, s } = child.props;
        const point = HexUtils.hexToPixel(new Hex(q, r, s), layout);
        return (
          point.x > x &&
          point.x < width + x &&
          point.y > y &&
          point.y < height + y
        );
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
