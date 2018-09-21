import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import AppNavigation from "./components/Navigation";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

const Main = () => {
  return (
    <main>
      <AppNavigation />
      <Switch>
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/interests" component={Interests} />
        <Route exact path="/contactme" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={App} />
      </Switch>
    </main>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
