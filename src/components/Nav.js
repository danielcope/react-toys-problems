import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, flipMenu] = useState(false);

  return (
    <section>
      <span
        className={menuOpen ? "light-ham" : "dark-ham"}
        onClick={() => flipMenu(!menuOpen)}
      >
        <div className={!menuOpen ? "top-line" : "top-line-x"}></div>
        <div className={!menuOpen ? "mid-line" : "mid-line-x"}></div>
        <div className={!menuOpen ? "bot-line" : "bot-line-x"}></div>
      </span>
      <nav className={menuOpen ? "nav-opened" : "nav-closed"}>
        <ul>
          <a href="#joke-of-the-day">
            <li>text</li>
          </a>
          <a href="#joke-of-the-day">
            <li>text</li>
          </a>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
