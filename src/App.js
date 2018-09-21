import React, { Component } from "react";
import AppFooter from "./components/Footer";
import About from "./components/About";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <About />
        <Interests />
        <Contact />
        <AppFooter />
      </div>
    );
  }
}

export default App;
