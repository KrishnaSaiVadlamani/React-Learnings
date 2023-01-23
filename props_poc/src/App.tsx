import React from 'react';
import logo from './logo.svg';
import './App.css';


const PropsExample = (props: { name: string }) => {
 return <h1>Hi This is {props.name}</h1>;
}

function App (){
  return (
    <div>
       <PropsExample name="Krishna"/>
       <PropsExample name="Sai Kiran"/>
       <PropsExample name="Yashwanth"/>
       <PropsExample name="Rohith"/> 
    </div>
  );
}

export function Add(props: {a: number, b: number}){
    return <p>Adding of Two Numbers: {props.a}+{props.b} = {props.a + props.b}</p>;
}

export default App;
