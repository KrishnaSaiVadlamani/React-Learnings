import React, { SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: { target: { value: string; }; }) => {
    setInputValue(event.target.value);
    console.log("Inside handleChange");
    
  }
 
  function handleSubmit(e:SyntheticEvent) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  const handleClick = () => {
    console.log("Button was clicked");
  }

  return <div className="App">
    <button onClick={handleClick}>Click me</button>

    <form  onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  </div>;
}

export default App;
