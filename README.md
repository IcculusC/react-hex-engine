[![GitHub release](https://img.shields.io/github/release/icculusc/react-hex-engine.svg)](https://github.com/IcculusC/react-hex-engine/releases/latest)
[![CircleCI branch](https://img.shields.io/circleci/project/github/IcculusC/react-hex-engine/master.svg)](https://github.com/IcculusC/react-hex-engine/tree/master)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/icculusc/react-hex-engine.svg)](https://github.com/IcculusC/react-hex-engine/pulls)
[![GitHub issues](https://img.shields.io/github/issues/icculusc/react-hex-engine.svg)](https://github.com/IcculusC/react-hex-engine/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/icculusc/react-hex-engine.svg)](https://github.com/IcculusC/react-hex-engine/commits)
[![Docs status](https://img.shields.io/badge/docs-in_progress-orange.svg)](https://icculusc.github.io/react-hex-engine/)

# react-hex-engine

* [Installation](#installation)
* [Usage](#usage)
* [react-hex-grid](#credit) - credit where credit is due

### Installation
`yarn add react-hex-engine`

### Usage

##### Basic Example

This is the only example for now, but you can see more source in the [storybook](https://icculusc.github.io/react-hex-engine).

```
import React from "react";
import { Hexagon, HexEngine } from "react-hex-engine";

const HexMap = () => (
  <HexEngine
    spacing={1.05}
    width={320}
    height={240}
    viewBox={{ x: -30, y: -30, width: 60, height: 60 }}
  >
    <Hexagon q={-1} r={0} s={1} />
    <Hexagon q={0} r={0} s={0} />
    <Hexagon q={1} r={0} s={-1} />
  </HexEngine>
)
```

# Credit

Originally forked from [https://github.com/Hellenic/react-hexgrid](https://github.com/Hellenic/react-hexgrid)

Quote from the original readme

> React components to build interactive hexagons grids and games. It uses SVG which makes it fast, scalable and easy to apply custom styles. You can easily customize the layout of the grid just by configuration.
>
> Component-based approach allows you to customize the grid shape to suit your needs or even apply your own components / SVG elements to it. You can use pre-defined generator to create certain shape grid or you may build totally your own grid to the shape you wish, while still keeping it under control and interactive.
>
> You could easily use this library to build (just to name a few) a nice portfolio, image library or even a game!
>
> With inspiration from
[http://www.redblobgames.com/grids/hexagons](http://www.redblobgames.com/grids/hexagons).

