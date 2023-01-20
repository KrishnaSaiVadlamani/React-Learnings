import React, { Component } from "react";
import "./App.css";

// const functionalComponent = () => {
//   return <h1>Implementing Functional Component</h1>;
// };
// interface Props{
//    name:string;
// }
export class ClassComponent extends React.Component{
  render(): React.ReactNode {
    return <h1>Implementing Class Component</h1>;
  }
}
export const FunctionalComponent = (props:any)=>{
  return <h1>Implementing Functional Component by, {props.name}</h1>;
}

const HandlingStateFunctionalComponent = () => {
  const [count, setCount] = React.useState(0);
 
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
 };

export default HandlingStateFunctionalComponent;
