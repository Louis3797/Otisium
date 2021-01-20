import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Trainer } from "./pages/Trainer";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";

import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/trainer" component={Trainer} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
