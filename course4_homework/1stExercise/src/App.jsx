import React from 'react';
import './App.css';

const HelloWorldSquare = () => {
  const squareStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  };

  const textStyle = {
    color: 'white',
    fontSize: '20px',
  };

  return (
    <div style={squareStyle}>
      <p style={textStyle}>Hello, World!</p>
    </div>
  );
};

export default HelloWorldSquare;