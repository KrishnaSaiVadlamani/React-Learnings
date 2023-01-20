import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [flag, setFlag] = useState(false);
  // const value = false;
  return (
    <div className="App">
      {/* Hello Krishna!!! */}
      {flag ? "Hello GentleMan" : "Hello Mannnn"}
      <br />
      <button
        onClick={
          () => setFlag(!flag)
          // {value=true;}
        }
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
