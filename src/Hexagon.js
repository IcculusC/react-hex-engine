import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Hex from "./models/Hex";
import HexUtils from "./HexUtils";
import Point from "./models/Point";
import Text from "./Text";
import { withHexEngine } from "./Context";

class Hexagon extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.objectOf(PropTypes.any),
    data: PropTypes.object,
    hoverable: PropTypes.bool,
    /** Provides a means to highlight a tile without selecting it, styleable with the `highlighted` class */
    highlighted: PropTypes.bool,
    layout: PropTypes.objectOf(PropTypes.any).isRequired,
    onClick: PropTypes.func,
    onDragEnd: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func,
    points: PropTypes.string.isRequired,
    q: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    /** Disable the `selected` prop, rather redundant */
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
    /** Show the `q`, `r`, `s` coordinates of the hexagon, styleable with the `q`, `r`, and `s` classes */
    showCoordinates: PropTypes.bool,
    /** Show text in the hexagon, styleable with the `text` class */
    text: PropTypes.string,
    TextProps: PropTypes.objectOf(PropTypes.any)
  };

  static defaultProps = {
    classes: {
      group: "",
      hexagon: "",
      highlighted: "",
      hovered: "",
      polygon: "",
      q: "",
      r: "",
      s: "",
      selected: "",
      text: ""
    },
    data: {},
    highlighted: false,
    hoverable: true,
    selectable: true,
    selected: false,
    showCoordinates: false,
    text: "",
    TextProps: {}
  };

  static getCoordinateTextOffset(
    corner,
    { orientation, size },
    offset = new Point(0, 0),
    scale = new Point(0.75, 0.75)
  ) {
    const angle = (2.0 * Math.PI * (corner + 0.5)) / 6;
    return new Point(
      size.x * scale.x * Math.cos(angle),
      size.y * scale.y * Math.sin(angle)
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.points !== nextProps.points) {
      const { layout, points, q, r } = nextProps;
      const hex = new Hex(q, r);
      const pixel = HexUtils.hexToPixel(hex, nextProps.layout);
      return { hex, pixel, layout, points };
    }
    return null;
  }

  state = {
    hex: {},
    hovered: false,
    layout: {},
    pixel: {},
    points: ""
  };

  constructor(props) {
    super(props);
    const hex = new Hex(props.q, props.r);
    const pixel = HexUtils.hexToPixel(hex, props.layout);
    this.state = {
      ...this.state,
      hex,
      pixel
    };
  }

  onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e, this.state.hex);
    }
  }

  onDragEnd(e) {
    if (this.props.onDragEnd) {
      e.preventDefault();
      const success = e.dataTransfer.dropEffect !== "none";
      this.props.onDragEnd(e, this.state.hex, success);
    }
  }

  onDragOver(e) {
    if (this.props.onDragOver) {
      this.props.onDragOver(e, this.state.hex);
    }
  }

  onDragStart(e) {
    if (this.props.onDragStart) {
      const targetProps = {
        ...this.state,
        data: this.props.data,
        classes: this.props.classes
      };
      e.dataTransfer.setData("hexagon", JSON.stringify(targetProps));
      this.props.onDragStart(e, this.state.hex);
    }
  }

  onDrop(e) {
    if (this.props.onDrop) {
      e.preventDefault();
      const target = JSON.parse(e.dataTransfer.getData("hexagon"));
      this.props.onDrop(e, this.state.hex, target);
    }
  }

  onMouseEnter(e) {
    this.setState({ hovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e, this.state.hex);
    }
  }

  onMouseLeave(e) {
    this.setState({ hovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e, this.state.hex);
    }
  }

  onMouseOver(e) {
    if (this.props.onMouseOver) {
      this.props.onMouseOver(e, this.state.hex);
    }
  }

  render() {
    const {
      classes,
      highlighted,
      hoverable,
      layout,
      points,
      q,
      r,
      s,
      selectable,
      selected,
      showCoordinates,
      text,
      TextProps
    } = this.props;
    const { hovered, pixel } = this.state;
    let qPixel, rPixel, sPixel;
    if (showCoordinates) {
      qPixel = Hexagon.getCoordinateTextOffset(3, layout, {
        x: 0,
        y: 1
      });
      rPixel = Hexagon.getCoordinateTextOffset(1, layout, {
        x: -1,
        y: -1
      });
      sPixel = Hexagon.getCoordinateTextOffset(5, layout, {
        x: -2,
        y: 1
      });
    }
    return (
      <g
        className={classNames("hexagon-group", classes.group)}
        draggable="true"
        onClick={e => this.onClick(e)}
        onDragEnd={e => this.onDragEnd(e)}
        onDragOver={e => this.onDragOver(e)}
        onDragStart={e => this.onDragStart(e)}
        onDrop={e => this.onDrop(e)}
        onMouseEnter={e => this.onMouseEnter(e)}
        onMouseLeave={e => this.onMouseLeave(e)}
        onMouseOver={e => this.onMouseOver(e)}
        transform={`translate(${pixel.x}, ${pixel.y})`}
      >
        <g
          className={classNames("hexagon", classes.hexagon, {
            [classes.selected]: selectable && selected,
            [classes.highlighted]: highlighted,
            [classes.hovered]: hoverable && hovered
          })}
        >
          <polygon className={classes.polygon} points={points} />
          {this.props.children}
          {text ? (
            <Text classes={{ text: classes.text }} {...TextProps}>
              {text}
            </Text>
          ) : null}
          {showCoordinates ? (
            <React.Fragment>
              <text
                {...qPixel}
                className={classes.q}
                fontSize={2}
                textAnchor="middle"
              >
                {q}
              </text>
              <text
                {...rPixel}
                className={classes.r}
                fontSize={2}
                textAnchor="middle"
              >
                {r}
              </text>
              <text
                {...sPixel}
                className={classes.s}
                fontSize={2}
                textAnchor="middle"
              >
                {s}
              </text>
            </React.Fragment>
          ) : null}
        </g>
      </g>
    );
  }
}

export const Hexagon_ = Hexagon;
export default withHexEngine(Hexagon_);
