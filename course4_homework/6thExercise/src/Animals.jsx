import React from 'react';

const AnimalList = ({ animals }) => {
  return (
    <div>
      {animals.map((animal, index) => (
        <div key={index} className="animal-item">
          {animal}
        </div>
      ))}
    </div>
  );
};

export default AnimalList;