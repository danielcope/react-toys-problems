import React, { useState } from "react";
import "animate.css";

const Nav = () => {
  const [menu, flipMenu] = useState(false);

  const navList = [
    {
      name: "To Do List",
      id: "#to-do-list-card",
    },
    {
      name: "Counter",
      id: "#counter-card",
    },
    {
      name: "Dice Roller",
      id: "#dice-roller-card",
    },
    {
      name: "Random Person",
      id: "#random-person-card",
    },
    {
      name: "Joke of the Day",
      id: "#joke-of-the-day-card",
    },
    {
      name: "Aos Testing",
      id: "#aos-testing-card",
    },
  ];

  return (
    <section className="nav-section">
      <MenuButton menu={menu} flipMenu={flipMenu} />
      <nav className={menu ? "nav-opened" : "nav-closed"}>
        <ul>
          <NavList navList={navList} />
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
    <NavLink key={ele.name} name={ele.name} id={ele.id} />
  ));

  return <ul>{mappedNavList}</ul>;
};

const NavLink = (props) => {
  return (
    <li>
      <a href={props.id}>{props.name}</a>
    </li>
  );
};

export default Nav;
