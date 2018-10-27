import React from "react";

export const HexEngineContext = React.createContext({
  layout: null,
  points: null,
  viewBox: null
});

export const {
  Consumer: HexEngineConsumer,
  Provider: HexEngineProvider
} = HexEngineContext;

export function withHexEngine(Component) {
  return props => (
    <HexEngineConsumer>
      {engine => <Component {...engine} {...props} />}
    </HexEngineConsumer>
  );
}
