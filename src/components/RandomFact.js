import React, { useState } from "react";
import axios from "axios";

const RandomFact = () => {
  const [joke, updateJoke] = useState({});

  const getRandomFact = () => {
    axios
      .get("https://api.jokes.one/jod")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <section className="card">
      <section className="card-container">
        <h1>Joke of the day</h1>
        <button onClick={() => getRandomFact()}>New fact</button>
      </section>
    </section>
  );
};

export default RandomFact;
