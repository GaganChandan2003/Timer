import Timer from './compnents/Timer';
import React from 'react';
import './App.css';

function App() {
  const [start,setStart]=React.useState(0);
  const [end,setEnd]=React.useState(0);
  return (
    <div className="App">
      <input type="number" placeholder='StartTime' onChange={(e)=>setStart(Number(e.target.value))} />
      <input type="number"  placeholder='EndTime' onChange={(e)=>setEnd(Number(e.target.value))} />
      <Timer start={start} end={end}/>
    </div>
  );
}

export default App;
