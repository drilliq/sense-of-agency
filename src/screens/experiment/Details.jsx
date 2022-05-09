import React, { useState } from 'react';

function Details({ callback, dataCallback }) {
  const [age, setAge] = useState('');

  const handleClick = () => {
    dataCallback(age);
    callback();
  };

  return (
    <div className="instruction-container">
      <div className="instructions">
        <div className="instructions-title">Please enter your age</div>
        <div className="details-form">
          <div>Age</div>
          <input onChange={(e) => setAge(e.target.value)} value={age} name="age" />
        </div>
        <div className="instructions-start" onClick={handleClick}>
          Continue
        </div>
      </div>
    </div>
  );
}

export default Details;
