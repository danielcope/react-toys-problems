import React, { useState } from "react";

const Counter = () => {
  const [count, updateCounter] = useState(0);

  return (
    <div className="card">
      <div>
        <span>{count}</span>
      </div>
      <section>
        <button onClick={() => updateCounter(count - 1)}>-</button>
        <button onClick={() => updateCounter(0)}>Reset</button>
        <button onClick={() => updateCounter(count + 1)}>+</button>
      </section>
    </div>
  );
};

export default Counter;
