import React from "react";
import { useState, useEffect } from "react";
import { useContext, useReducer} from "react";

const MyContext = React.createContext(1);
const initialState = { count: 0 };

function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Hooks() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  
  useEffect(() => {
    document.title = `You have clicked count button ${count} times`;
  }, [count]);

  const value = useContext(MyContext);

  return (
    <div>
      <p>The value is {value}</p>

      <p>You have clicked count button ${count} times</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click Here
      </button>

      <p>Count using useReducer : {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      
      
    </div>
  );
}

export default Hooks;
