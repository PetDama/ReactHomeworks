import React from 'react';

const Button = ({ onClick, children }) => {
  const handleClick = () => {
    alert(`Clicked: ${children}`);
  };

  return (
    <button onClick={onClick || handleClick} style={{borderColor: 'white'}}>
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </div>
  );
};

export default App;