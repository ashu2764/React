import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);



  // let counter = 5;

  const addValue = ()=> { 

    if( counter < 20){
      counter = counter + 1;
      setCounter(counter)
    }
    
    // console.log("Clicked", Math.random())

  }

  const removeValue=()=>{
    if(counter>0){
      if(counter)
        setCounter(counter-1);
    }

    
  }

  return (
    <>
      <h1>Basic Counter Project</h1>
      <h2>Counter Value : {counter}</h2>


      <button onClick={addValue}>Add value</button>
      <br />

      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
