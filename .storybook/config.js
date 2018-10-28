import * as storybook from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "react-hex-engine",
  addonPanelInRight: true
});

function loadStories() {
  require("../stories/HexEngine.js");
  require("../stories/Hexagon.js");
  // You can require as many stories as you need.
}

storybook.configure(loadStories, module);
