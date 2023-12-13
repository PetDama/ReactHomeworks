import { useState } from 'react'
import './App.css'
import Joke from './Joke'

const  App = () => {
  const jokesArray = [
    {
      setup: 'Why did the chicken cross the road?',
      punchline: 'To get to the other side!',
    },
    {
      setup: 'What do you call a fish with no eyes?',
      punchline: 'A fsh!',
    },
    {
      setup: 'Why don\'t scientists trust atoms?',
      punchline: 'Because they make up everything!',
    },
  ]; 

  return (
    <div>
      {jokesArray.map((joke, index) => (
        <Joke key={index} joke={joke} />
      ))}
    </div>
  );
};

export default App
