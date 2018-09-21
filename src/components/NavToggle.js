import React, { Component } from "react";

class NavToggle extends Component {
  render() {
    return (
      <button className="toggle-button">
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    );
  }
}
export default NavToggle;
