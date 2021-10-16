import "./App.css";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <List />
      <Counter />
      <DiceRoller />
      <Weather />
    </div>
  );
}

export default App;
