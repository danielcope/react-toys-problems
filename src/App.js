import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";
import RandomPerson from "./components/RandomPerson";
import JokeOfTheDay from "./components/JokeOfTheDay";
import Nav from "./components/Nav";
import AosTesting from "./components/AosTesting";

import AOS from "aos";
import "aos/dist/aos.css";

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <List />
        <Counter />
        <DiceRoller />
        <RandomPerson />
        <JokeOfTheDay />
        <AosTesting />
      </div>
    );
  }
}

export default App;
