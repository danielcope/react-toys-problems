import "./App.css";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";
import TikTakToe from "./components/TikTakToe";
import Weather from "./components/Weather";
import RandomPerson from "./components/RandomPerson";

function App() {
  return (
    <div className="App">
      <List />
      <Counter />
      <DiceRoller />
      <RandomPerson />
      {/* <Weather /> */}
      {/* <TikTakToe /> */}
    </div>
  );
}

export default App;
