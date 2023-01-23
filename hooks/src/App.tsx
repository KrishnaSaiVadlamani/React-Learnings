import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [Theme, setTheme] = useState("black");

  function decrementOperation() {
    setCount((prevCount) => prevCount - 1);
    setTheme("blue");
  }

  function incrementOperation() {
    setCount((prevCount) => prevCount + 1);
    setTheme("Red");
  }


  return (
    <>
      <button onClick={decrementOperation}>-</button>
      <span>{count}</span>
      <span>{Theme}</span>
      <button onClick={incrementOperation}>+</button>
    </>
  );
}

export default App;
