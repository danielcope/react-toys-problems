import React, { useState } from "react";

const Counter = () => {
  const [count, updateCounter] = useState(0);

  return (
    <section className="card">
      <section className="card-container">
        <h1>Counter</h1>
        <section>
          <h1>{count}</h1>
        </section>
        <section>
          <button onClick={() => updateCounter(count - 1)}>-</button>
          <button onClick={() => updateCounter(0)}>Reset</button>
          <button onClick={() => updateCounter(count + 1)}>+</button>
        </section>
      </section>
    </section>
  );
};

export default Counter;
