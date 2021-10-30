import "./App.css";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";
import RandomPerson from "./components/RandomPerson";
import RandomFact from "./components/RandomFact";

//component not in use
// import TikTakToe from "./components/TikTakToe";
// import Weather from "./components/Weather";
// import Nasa from "./components/Nasa";

function App() {
  return (
    <div className="App">
      <List />
      <Counter />
      <DiceRoller />
      <RandomPerson />
      <RandomFact />
      {/* <Weather /> */}
      {/* <TikTakToe /> */}
      {/* <Nasa /> */}
    </div>
  );
}

export default App;
