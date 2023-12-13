import React from 'react';

const Joke = ({ joke }) => {
    const boxStyle = {
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
    };

return (
    <div style={boxStyle}>
      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
    </div>
  );
}

export default Joke;