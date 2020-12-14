import React from "react";
import Homepage from "./components/Homepage";
import Navapp from "./Navapp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navapp></Navapp>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
