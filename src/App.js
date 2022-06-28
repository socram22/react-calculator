import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Clear from "./components/Clear";
import Screen from "./components/Screen";

function App() {
  const [input, setInput] = useState("");
  const handleClick = (val) => {
    setInput(input + val);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Seleccione una operación!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">React Calculator</h1>
      <div className="calc-container">
        <Screen input={input} />
        <div className="fila">
          <Button onClick={handleClick}>1</Button>
          <Button onClick={handleClick}>2</Button>
          <Button onClick={handleClick}>3</Button>
          <Button onClick={handleClick}>+</Button>
        </div>
        <div className="fila">
          <Button onClick={handleClick}>4</Button>
          <Button onClick={handleClick}>5</Button>
          <Button onClick={handleClick}>6</Button>
          <Button onClick={handleClick}>-</Button>
        </div>
        <div className="fila">
          <Button onClick={handleClick}>7</Button>
          <Button onClick={handleClick}>8</Button>
          <Button onClick={handleClick}>9</Button>
          <Button onClick={handleClick}>*</Button>
        </div>
        <div className="fila">
          <Button onClick={handleResult}>=</Button>
          <Button onClick={handleClick}>0</Button>
          <Button onClick={handleClick}>.</Button>
          <Button onClick={handleClick}>/</Button>
        </div>
        <div className="fila">
          <Clear onClick={handleClear} />
        </div>
      </div>
    </div>
  );
}

export default App;
