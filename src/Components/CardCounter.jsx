import React, { useState } from 'react';

function CardCounter() {
    const [count, setCount] = useState(1);


    const multiply = () => setCount(count * multiplier);
    const [multiplier, setMultiplier] = useState(2);
    const increaseMultiplier = () => setMultiplier(multiplier + 1);
    const decreaseMultiplier = () => setMultiplier(multiplier - 1);

    const divide = () => setCount(count / divider);
    const [divider, setDivider] = useState(2);
    const increaseDivider = () => setDivider(divider + 1);
    const decreaseDivider = () => setDivider(divider - 1);

  return (
  <div
    style={{
      height: '100vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
    }}
  >
    {/* Count Value */}
    <h1>Value: {count}</h1>

    {/* Action Buttons */}
    <div
      style={{
        display: 'flex',
        gap: '4rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {/* Multiply Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={multiply} className="btn btn-outline-info btn-lg">
          Multiply × {multiplier}
        </button>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={increaseMultiplier} className="btn btn-outline-light">+</button>
          <button onClick={decreaseMultiplier} className="btn btn-outline-light">−</button>
        </div>
      </div>

      {/* Divide Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={divide} className="btn btn-outline-primary btn-lg">
          Divide ÷ {divider}
        </button>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={increaseDivider} className="btn btn-outline-light">+</button>
          <button onClick={decreaseDivider} className="btn btn-outline-light">−</button>
        </div>
      </div>
    </div>
  </div>
);

}

export default CardCounter;
