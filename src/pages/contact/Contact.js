import React from "react";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <main>
        <form>
          <label>
            Name:
            <input type="text" name="name"></input>
          </label>
          <label>
            Email Address:
            <input type="email" name="email"></input>
          </label>

          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

export default Contact;
