import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/HexEngine.js");
  require("../stories/Hexagon.js");
  // You can require as many stories as you need.
}

configure(loadStories, module);
