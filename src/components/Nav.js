import React, { useState } from "react";
import "animate.css";

const Nav = (props) => {
  const [menu, flipMenu] = useState(false);

  return (
    <section className="nav-section">
      <MenuButton menu={menu} flipMenu={flipMenu} />
      <nav className={menu ? "nav-opened" : "nav-closed"}>
        <ul>
          <NavList navList={props.cardList} flipMenu={flipMenu} />
        </ul>
      </nav>
    </section>
  );
};

const MenuButton = (props) => {
  return (
    <div
      className="ham-button-container"
      onClick={() => props.flipMenu(!props.menu)}
    >
      <div
        className={!props.menu ? "line top-line" : "light-line top-line-x"}
      ></div>
      <div
        className={!props.menu ? "line mid-line" : "light-line mid-line-x"}
      ></div>
      <div
        className={!props.menu ? "line bot-line" : "light-line bot-line-x"}
      ></div>
    </div>
  );
};

const NavList = (props) => {
  const mappedNavList = props.navList.map((ele, i) => (
    <NavLink
      key={ele.title}
      name={ele.title}
      id={ele.href}
      flipMenu={props.flipMenu}
    />
  ));

  return <ul>{mappedNavList}</ul>;
};

const NavLink = (props) => {
  return (
    <li>
      <a href={props.id} onClick={() => props.flipMenu(false)}>
        {props.name}
      </a>
    </li>
  );
};

export default Nav;
