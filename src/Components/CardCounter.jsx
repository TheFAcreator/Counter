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
    <div>
      <h2 style={{ position: 'absolute', top: '40%', left: '45%'}}>Value:</h2>
      <button class="btn btn-success btn-lg" style={{ position: 'absolute', top: '50%', left: '46%', justifyContent: "flex-start"}}>{count}</button>

      <button class="btn btn-info btn-lg" style={{ position: 'absolute', top: '70%', left: '32.3%'}}>{multiplier}</button>
      <button class="btn btn-info btn-lg" style={{ position: 'absolute', top: '70%', left: '61.4%'}}>{divider}</button>
      <div style={{ position: 'relative', height: '100vh'}}>
        <button onClick={multiply} type="button" class="btn btn-outline-info btn-lg" style={{ position: 'absolute', top: '60%', left: '30%'}}>Multiply *</button>
        <button onClick={increaseMultiplier} type="button" class="btn btn-outline-light" style={{ position: 'absolute', top: '69%', left: '28%'}}>+</button>
        <button onClick={decreaseMultiplier} type="button" class="btn btn-outline-light" style={{ position: 'absolute', top: '69%', left: '36.3%'}}>-</button>

        <button onClick={divide} type="button" class="btn btn-outline-primary btn-lg" style={{ position: 'absolute', top: '60%', left: '60%'}}>Divide /</button>
        <button onClick={increaseDivider} type="button" class="btn btn-outline-light" style={{ position: 'absolute', top: '69%', left: '57.8%'}}>+</button>
        <button onClick={decreaseDivider} type="button" class="btn btn-outline-light" style={{ position: 'absolute', top: '69%', left: '65.8%'}}>-</button>
      </div>
    </div>
  );
}

export default CardCounter;
