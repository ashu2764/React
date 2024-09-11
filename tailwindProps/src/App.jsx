import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  console.log("props", props)

  // let myObje={
  //   username :"Ashwani",
  //   age:25
  // }

  let newArr = [1,3,5,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username = "Ashwani Kumar" btnText="clickMe" />
     <Card  username = "Ashu"  btnText="Visit me"/>
     
    </>
  )
}

export default App
