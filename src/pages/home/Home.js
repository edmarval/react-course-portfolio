import React from "react";

import * as styles from "./Home.module.scss";

import avatar from "../../assets/eduardo.jpg";

class Home extends React.Component {
  state = {
    factVisible: false,
  };

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
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

export default Home;
