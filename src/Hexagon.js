import React, {
  useContext,
  useEffect,
  useMutationEffect,
  useState
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Hex from "./models/Hex";
import HexUtils from "./HexUtils";
import Point from "./models/Point";
import Text from "./Text";
import { HexEngineContext } from "./Context";

function getCoordinateTextOffset(
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

const Hexagon = props => {
  const {
    children,
    classes,
    highlighted,
    hoverable,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    q,
    r,
    s,
    selectable,
    selected,
    showCoordinates,
    text,
    TextProps
  } = props;

  const { layout, points } = useContext(HexEngineContext);
  const [hex, setHex] = useState(new Hex(0, 0));
  const [hovered, setHovered] = useState(false);
  const [pixel, setPixel] = useState(new Point(0, 0));

  useEffect(() => setHex(() => new Hex(q, r)), [q, r]);

  useMutationEffect(() => setPixel(() => HexUtils.hexToPixel(hex, layout)), [
    hex,
    points
  ]);

  let qPixel, rPixel, sPixel;
  if (showCoordinates) {
    qPixel = getCoordinateTextOffset(3, layout, {
      x: 0,
      y: 1
    });
    rPixel = getCoordinateTextOffset(1, layout, {
      x: -1,
      y: -1
    });
    sPixel = getCoordinateTextOffset(5, layout, {
      x: -2,
      y: 1
    });
  }

  return (
    <g
      className={classNames("hexagon-group", classes.group)}
      draggable="true"
      onClick={e => (onClick ? onClick(e, hex) : undefined)}
      onMouseEnter={e => {
        setHovered(() => true);
        if (onMouseEnter) {
          onMouseEnter(e, hex);
        }
      }}
      onMouseLeave={e => {
        setHovered(() => false);
        if (onMouseLeave) {
          onMouseLeave(e, hex);
        }
      }}
      onMouseOver={e => {
        if (onMouseOver) {
          onMouseOver(e, hex);
        }
      }}
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
        {children}
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
};

Hexagon.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.any),
  data: PropTypes.object,
  hoverable: PropTypes.bool,
  /** Provides a means to highlight a tile without selecting it, styleable with the `highlighted` class */
  highlighted: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
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

Hexagon.defaultProps = {
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

export const Hexagon_ = Hexagon;
export default Hexagon_;
