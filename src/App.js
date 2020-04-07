import React from "react";
// import "./App.scss";
import * as styles from "./App.module.scss";

import avatar from "./assets/eduardo.jpg";

import { Header } from "./components";

class App extends React.Component {
  state = {
    factVisible: false,
  };

  render() {
    return (
      <main>
        <Header />
        <div className={styles.container}>
          <section>
            <h1> Eduardo Marval</h1>
            <h2> Squad Lead AND Geek Dancer</h2>
            <span>This is some text that I need to add some more to it</span>
            <button onClick={this.shouldHide}> Show Interesting Facts</button>
            {this.state.factVisible ? (
              <ol>
                Interesting Facts:
                <li> Apart from my normal job, have my own dance academy</li>
                <li>Love Squash</li>
                <li>another Text</li>
              </ol>
            ) : null}
          </section>
          <img src={avatar} alt="Eduardo's picture" />
        </div>
      </main>
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
