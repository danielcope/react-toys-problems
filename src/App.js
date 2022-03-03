// import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";
import RandomPerson from "./components/RandomPerson";
import JokeOfTheDay from "./components/JokeOfTheDay";
import Nav from "./components/Nav";
import AosTesting from "./components/AosTesting";
import RandomText from "./components/RandomText";

import AOS from "aos";
import "aos/dist/aos.css";
import BetterList from "./components/BetterList";

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
        <CardList />
      </div>
    );
  }
}

export const CardList = () => {
  const mappedCardList = cardList.map((ele, i) => (
    <Card key={i} title={ele.title} content={ele.content} id={ele.id} />
  ));

  return (
    <section className="flex flex-wrap justify-around">
      {mappedCardList}
    </section>
  );
};

export const Card = (props) => {
  return (
    <section className="card" id={props.id}>
      <h1>{props.title}</h1>
      <section className="card-container">{props.content}</section>
    </section>
  );
};

const cardList = [
  {
    title: "AOS Testing",
    content: <AosTesting />,
    id: "#aos-testing-card",
  },
  {
    title: "Counter",
    content: <Counter />,
  },
  {
    title: "To-Do List",
    content: <List />,
  },
  {
    title: "Dice Roller",
    content: <DiceRoller />,
  },
  {
    title: "Random Person",
    content: <RandomPerson />,
  },
  {
    title: "Joke of the Day",
    content: <JokeOfTheDay />,
  },
  {
    title: "Better List",
    content: <BetterList />,
  },
  {
    title: "Random Text",
    id: "#random-text",
    content: <RandomText />,
  },
];

export default App;
