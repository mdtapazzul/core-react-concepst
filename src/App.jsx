import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter.jsx';
import Team from './team';
import Users from './users';
import Friends from './frinds';
import Friend from './friend';

function App() {
  function handleClick(){
    alert('button click');
  }
  const handleClick2 = () => {
    alert('button 2 click ')
  }
  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2 </h3>

      <Friend></Friend>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>
        <Counter></Counter>
     


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third clicked')}}>third click</button>
      <button onClick={() => {addToFive(3)}}>Four</button>
    </>
  )
}

export default App

