import "./App.css";
import { useState } from "react";
import Calculator from "./components/Calculator.js";

function App() {
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("");

  function handleClick(value) {
    setDisplay(value);
    setExpression([...expression, value]);
  }

  function getResult() {
    setDisplay(eval(expression));
    setExpression(" ");
  }

  return (
    <div className="App">
      <div className="container">
        <Calculator handleClick={handleClick} getResult={getResult} display={display} expression={expression} />
      </div>
    </div>
  );
}

export default App;
