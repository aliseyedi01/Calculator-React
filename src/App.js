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
    console.log(expression, typeof expression);
    const calculate = expression.join("").toString();
    const result = eval(calculate);

    setDisplay(result);
    setExpression("");
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
