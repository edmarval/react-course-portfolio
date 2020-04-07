import React from "react";
import * as styles from "./Header.module.scss";

import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <a className={styles.header__title} href="/">
          <span>Eduardo Marval</span>
        </a>

        <nav>
          <ul className={styles.nav_links}>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              exact
              to="/"
            >
              About
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              exact
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              exact
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
