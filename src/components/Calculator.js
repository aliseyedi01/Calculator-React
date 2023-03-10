import React from "react";
import "./calculator.css";

function Calculator({ display, expression, handleClick, getResult }) {
  return (
    <div className="calculator-wrapper">
      <h3 className="display">{display}</h3>

      <span className="expression">{expression}</span>

      <section className="panel">
        <section className="numbers">
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>

          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>

          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>

          <button onClick={() => handleClick(0)}>0</button>
        </section>

        <section className="operators">
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("*")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => getResult()}> =</button>
        </section>
      </section>
    </div>
  );
}

export default Calculator;
