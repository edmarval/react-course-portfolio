import React from "react";
//eslint-disable-next-line react/prop-types
function Skill({ name, content, onDelete }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{content}</p>
      <button onClick={onDelete}>Delete</button>
    </section>
  );
}

export default Skill;
