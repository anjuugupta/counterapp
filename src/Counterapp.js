import React, { useState } from 'react'
import './counterapp.css'

export const Counterapp = () => {
const [counter, setCounter] = useState(0);

const handleIncreament = () => {
    setCounter (counter + 1)
}

const handleDecreament = () => {
    if (counter >0)
    setCounter (counter - 1)
}

  return (
    <div>
    <h1 style={{height:'55px'}}>{counter}</h1>
    <button onClick={handleIncreament} className='increment'>Increment</button>
    <button onClick={handleDecreament} className='decrement'>Decrement</button>
    </div>
  )
}
