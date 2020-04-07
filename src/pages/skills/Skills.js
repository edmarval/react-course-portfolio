import React from "react";

import { Skill } from "../../components";

// import * as styles from "./Skills.module.scss";

class Skills extends React.Component {
  handleDeleteSkill = (id) => {
    this.setState((currentState) => ({
      skills: currentState.skills.filter((skill) => skill.id !== id),
    }));
  };

  state = {
    skills: [
      { id: 0, name: "Software Architecture", content: "this is the content 1" },
      { id: 1, name: "Backend Development", content: "this is the content 2" },
      { id: 2, name: "Problem Solving", content: "this is the content 3" },
    ],
  };

  render() {
    return (
      <main>
        <h1>My Skills</h1>
        <div className="skills">
          <ol>
            {this.state.skills.map((skill) => (
              <Skill
                onDelete={() => this.handleDeleteSkill(skill.id)}
                key={skill.id}
                name={skill.name}
                content={skill.content}
              ></Skill>
            ))}
          </ol>
        </div>
      </main>
    );
  }
}

export default Skills;
