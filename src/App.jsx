

import { useState } from 'react'
import './App.css'
import Card from './assets/components/card'
import Button from './assets/components/card';

function App() {
  const [count,setcount]=useState(0);
  function HandleClick() {
     setcount(count+1);
     
  }

  return (
    <div className="container">
    <Button handleClick={HandleClick} text="click me">

     <h1>{count}</h1>
       
    </Button>
   
    </div>


  )
}

export default App
