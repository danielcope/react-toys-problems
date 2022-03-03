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
    <div data-aos="fade-up" id="dice-roller-card">
      <h4>Result: {finalRoll}</h4>
      <section className="flex flex-col justify-center items-center h-44">
        <input
          type="number"
          value={numOfDice}
          placeholder="number of dice"
          onChange={(e) => handleNumOfDiceChange(e.target.value)}
        />
        <section className="dice-bag">
          <div className="dice" onClick={() => roll(4)}>
            <p>4</p>
          </div>
          <div className="dice" onClick={() => roll(6)}>
            <p>6</p>
          </div>
          <div className="dice" onClick={() => roll(8)}>
            <p>8</p>
          </div>
          <div className="dice" onClick={() => roll(10)}>
            <p>10</p>
          </div>
          <div className="dice" onClick={() => roll(12)}>
            <p>12</p>
          </div>
          <div className="dice" onClick={() => roll(20)}>
            <p>20</p>
          </div>
          <div className="dice" onClick={() => roll(100)}>
            <p>100</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DiceRoller;
