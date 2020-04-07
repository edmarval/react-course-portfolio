import React from "react";
// import "./App.scss";
import * as styles from "./App.module.scss";

import avatar from "./assets/eduardo.jpg";

import { Header } from "./components";

import { Home, Skills } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    factVisible: false,
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </Router>
    );
  }

  shouldHide = () => {
    this.setState((currentState) => {
      return {
        factVisible: !currentState.factVisible,
      };
    });

    console.log(this.state.factVisible);
  };
}

export default App;
