import { Component } from "geotic";
import { chars, colors } from "../lib/graphics";
import { layers } from "../lib/canvas";

export default class Appearance extends Component {
  static properties = {
    color: colors.defaultColor,
    currentColor: this.color,
    char: chars.defaultChar,
    background: colors.defaultBGColor,
    layer: layers.ground,
  };

  onSoil(evt) {
    if (evt.data.color) {
      this.currentColor = evt.data.color;
    }
  }

  onClean(evt) {
    this.currentColor = null;
  }
}
