import "./App.css";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";
import TikTakToe from "./components/TikTakToe";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <List />
      <Counter />
      <DiceRoller />
      {/* <Weather /> */}
      <TikTakToe />
    </div>
  );
}

export default App;
