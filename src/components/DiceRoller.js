import React, { useState } from "react";

const DiceRoller = () => {
  const [finalRoll, updateFinalRoll] = useState(0);
  const [numOfDice, updateNumOfDice] = useState(0);

  const handleNumOfDiceChange = (e) => updateNumOfDice(e);

  const roll = (num) => {
    const rollsArr = [];
    let sum = 0;

    for (let i = 0; i < numOfDice; i++) {
      rollsArr.push(Math.floor(Math.random() * num) + 1);
    }

    for (let i = 0; i < rollsArr.length; i++) {
      sum += rollsArr[i];
    }

    updateFinalRoll(sum);
  };

  return (
    <div className="card">
      <span>{finalRoll}</span>
      <input
        type="number"
        value={numOfDice}
        onChange={(e) => handleNumOfDiceChange(e.target.value)}
      />
      <section className="dice-bag">
        <div className="dice" onClick={() => roll(4)}>
          4
        </div>
        <div className="dice" onClick={() => roll(6)}>
          6
        </div>
        <div className="dice" onClick={() => roll(8)}>
          8
        </div>
        <div className="dice" onClick={() => roll(10)}>
          10
        </div>
        <div className="dice" onClick={() => roll(12)}>
          12
        </div>
        <div className="dice" onClick={() => roll(20)}>
          20
        </div>
        <div className="dice" onClick={() => roll(100)}>
          100
        </div>
      </section>
    </div>
  );
};

export default DiceRoller;
