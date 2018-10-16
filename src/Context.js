import React from "react";
import Orientation from "./models/Orientation";

export const LayoutContext = React.createContext({
  layout: Orientation.Flat,
  points: ""
});
export const {
  Provider: LayoutProvider,
  Consumer: LayoutConsumer
} = LayoutContext;

export function withLayout(Component) {
  return props => (
    <LayoutConsumer>
      {layout => <Component layout={layout} {...props} />}
    </LayoutConsumer>
  );
}

export function withExpandedLayout(Component) {
  return props => (
    <LayoutConsumer>
      {({ layout, points }) => (
        <Component layout={layout} points={points} {...props} />
      )}
    </LayoutConsumer>
  );
}

export const ViewBoxContext = React.createContext({
  x: -50,
  y: -50,
  width: 100,
  height: 100
});
export const {
  Provider: ViewBoxProvider,
  Consumer: ViewBoxConsumer
} = ViewBoxContext;

export function withViewBox(Component) {
  return props => (
    <ViewBoxConsumer>
      {viewBox => <Component viewBox={viewBox} {...props} />}
    </ViewBoxConsumer>
  );
}
