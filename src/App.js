import React, { Component } from "react";
import "./App.css";
import AppNavigation from "./components/Navigation";
import Lesley from "/Users/lesleysablatura/Desktop/lesley-resume/src/Lesley.jpg";
import About from "./components/About";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import AppFooter from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavigation />
        <div className="profile">
          <div className="profile-image">
            <img src={Lesley} alt={"Lesley"} />
          </div>
          <div className="profile-name">
            <h5>Lesley Sablatura</h5>
            <hr />
            <p>Real-Life Product Manager</p>
            <p>Wanna-Be Software Engineer in Austin, Texas</p>
          </div>
        </div>
        <div className="about-me">
          <About />
        </div>
        <div className="interests-wrapper">
          <Interests />
        </div>
        <div className="contact-wrapper">
          <Contact />
        </div>
        <div className="page-footer">
          <AppFooter />
        </div>
        <div>
          {/* <Switch>
              <Route exact path="/aboutme" component={About} />
              <Route path="/interests" component={Interests} />
              <Route path="/contactme" component={Contact} />
              <Route path="/" component={App} />
            </Switch> */}
        </div>
      </div>
    );
  }
}

export default App;
