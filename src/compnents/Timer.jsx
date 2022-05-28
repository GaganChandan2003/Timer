import React, { useEffect } from 'react'

const Timer = ({start,end}) => {

  const [timer,setTimer]=React.useState();

useEffect(()=>
{
  let id=setInterval(()=>
  {
    if(timer<end)
    {
      setTimer((prev)=>prev+1);
    }
    else{
      clearInterval(id);
    }
  },1000)
  return ()=>
  {
   clearInterval(id);
  } 
},[timer,end])
  
  return <div>

    <h2>Timer</h2>
    <h1>{timer}</h1>
   <button onClick={()=>setTimer(start)}>Lets Go</button>
  </div>
}

export default Timer