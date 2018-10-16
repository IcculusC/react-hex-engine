import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Hex from "../models/Hex";
import HexUtils from "../HexUtils";
import { withExpandedLayout } from "../Context";

class Hexagon extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    data: PropTypes.object,
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
    selected: PropTypes.bool
  };

  static defaultProps = {
    className: "",
    classes: {
      group: "",
      hexagon: "",
      highlighted: "",
      hovered: "",
      polygon: "",
      selected: ""
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { layout, q, r, s } = nextProps;
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);

    if (
      (!prevState.hex && !prevState.pixel) ||
      !(
        HexUtils.equals(prevState.hex, hex) ||
        (prevState.pixel.x === pixel.x && prevState.pixel.y === pixel.y)
      )
    ) {
      return { hex, pixel };
    }
    return null;
  }

  state = {
    hex: {},
    hovered: false,
    pixel: {}
  };

  onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e, this);
    }
  }

  onDragEnd(e) {
    if (this.props.onDragEnd) {
      e.preventDefault();
      const success = e.dataTransfer.dropEffect !== "none";
      this.props.onDragEnd(e, this, success);
    }
  }

  onDragOver(e) {
    if (this.props.onDragOver) {
      this.props.onDragOver(e, this);
    }
  }

  onDragStart(e) {
    if (this.props.onDragStart) {
      const targetProps = {
        ...this.state,
        data: this.props.data,
        fill: this.props.fill,
        className: this.props.className
      };
      e.dataTransfer.setData("hexagon", JSON.stringify(targetProps));
      this.props.onDragStart(e, this);
    }
  }

  onDrop(e) {
    if (this.props.onDrop) {
      e.preventDefault();
      const target = JSON.parse(e.dataTransfer.getData("hexagon"));
      this.props.onDrop(e, this, target);
    }
  }

  onMouseEnter(e) {
    this.setState({ hovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e, this);
    }
  }

  onMouseLeave(e) {
    this.setState({ hovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e, this);
    }
  }

  onMouseOver(e) {
    if (this.props.onMouseOver) {
      this.props.onMouseOver(e, this);
    }
  }

  render() {
    const { classes, highlighted, points, selected } = this.props;
    const { hovered, pixel } = this.state;
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
            [classes.selected]: selected,
            [classes.highlighted]: highlighted,
            [classes.hovered]: hovered
          })}
        >
          <polygon className={classes.polygon} points={points} />
          {this.props.children}
        </g>
      </g>
    );
  }
}

export default withExpandedLayout(Hexagon);
