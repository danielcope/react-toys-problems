import React from "react";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
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
        <Nav cardList={cardList} />
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
    title: "Better List",
    id: "better-list-card",
    href: "#better-list-card",
    content: <BetterList />,
  },
  {
    title: "Counter",
    id: "counter-card",
    href: "#counter-card",
    content: <Counter />,
  },
  {
    title: "Joke of the Day",
    id: "joke-of-the-day-card",
    content: <JokeOfTheDay />,
  },
  {
    title: "Dice Roller",
    id: "dice-roller-card",
    href: "#dice-roller-card",
    content: <DiceRoller />,
  },
  {
    title: "Random Person",
    id: "random-person-card",
    href: "#random-person-card",
    content: <RandomPerson />,
  },
  {
    title: "AOS Testing",
    id: "aos-testing-card",
    href: "#aos-testing-card",
    content: <AosTesting />,
  },
  {
    title: "Random Text",
    id: "random-text",
    href: "#random-text",
    content: <RandomText />,
  },
];

export default App;
