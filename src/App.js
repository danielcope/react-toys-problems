import "./App.css";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";
import Weather from "./components/Weather";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <List />
      <Counter />
      <DiceRoller />
      <Weather />
      <Location />
    </div>
  );
}

export default App;
