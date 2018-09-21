import React, { Component } from "react";
// import NavToggle from "./components/NavToggle";
import { Link } from "react-router-dom";

class AppNavigation extends Component {
  render() {
    return (
      <header className="nav-wrapper">
        <nav className="nav-nav">
          {/* <div /> */}
          <div className="nav-logo">
            <Link to="/">LESLEY SABLATURA</Link>
          </div>
          <div className="nav-item">
            <ul>
              <li>
                <Link to="/profile"> PROFILE</Link>
              </li>
              <li>
                <Link to="/aboutme">ABOUT ME</Link>
              </li>

              <li>
                <Link to="/interests">INTERESTS</Link>
              </li>
              <li>
                <Link to="/contactme">CONTACT ME</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default AppNavigation;
