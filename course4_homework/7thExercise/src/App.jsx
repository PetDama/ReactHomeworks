import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleGreetClick = () => {
    alert(`Hello ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <button onClick={handleGreetClick}>Greet Me</button>
    </div>
  )

}

export default App;