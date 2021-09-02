import "./App.css";
import Counter from "./components/Counter";
import DiceRoller from "./components/DiceRoller";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List />
      <Counter />
      <DiceRoller />
    </div>
  );
}

export default App;
