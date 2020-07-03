import React from "react";

class Theme extends React.Component {
  render() {
    for (let [paletteProperty, palettePropertyValue] of Object.entries(this.props.palette)) {
      if (typeof document !== `undefined`) {
        document.documentElement.style.setProperty(paletteProperty, palettePropertyValue);
      }
    }
    return null;
  }
}

export default Theme;
