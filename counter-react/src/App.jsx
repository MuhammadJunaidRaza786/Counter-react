import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  let [count, setCount] = useState(0)

  let increment = () =>{
    setCount(count + 1)
  }

  let decrement = () => {
    setCount(count - 1)
  }

  return(
    <>
      <p>count = {count}</p>
    <button type='button'onClick={increment}>increment
    </button>
    <button type='button' onClick={decrement}>decrement</button>
    
    </>
  )
}


export default App
