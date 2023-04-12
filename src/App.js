import './App.css';
import { useRef, useState } from 'react';

export default function App() {
  let[data,setdata]=useState('')
  let pass = useRef()
  let focus =()=>{
    pass.current.focus()
  }
  let change =()=>{
    setdata(data=pass.current.value)
  }
  return (
    <div className="App">
      <input type="text" ref={pass} onChange={()=>change()}/>
      <button onClick={focus}>click</button>
      <h2>{data}</h2>
    </div>
  );
}