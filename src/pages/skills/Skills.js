import React, { Component } from "react";

// import * as styles from "./Skills.module.scss";

class Skills extends Component {
  state = {};
  render() {
    return (
      <skills>
        <h1>My Skills</h1>
        <div className="skills">
          <ol>
            <li>Software Architecture</li>
            <li>Backend Development</li>
            <li>Problem Solving</li>
          </ol>
        </div>
      </skills>
    );
  }
}

export default Skills;
