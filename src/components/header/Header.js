import React from "react";
import * as styles from "./Header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <a className={styles.header__title} href="/">
          <span>Eduardo Marval</span>
        </a>

        <nav>
          <ul className={styles.nav_links}>
            <a href="/">About</a>
            <a href="/">Skills</a>
            <a href="/">Contact</a>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
