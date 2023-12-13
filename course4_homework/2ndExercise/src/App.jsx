import React from 'react';
import './App.css'

const App = () => {
  const handleClick = () => {
    alert('You clicked me!')
  };

  return (
    <button onClick={handleClick} style={{color: 'white', borderColor: 'white'}}>Click me!</button>
  );
}

export default App;
