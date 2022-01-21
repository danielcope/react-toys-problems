import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomFact = (props) => {
  const [joke, updateJoke] = useState({});

  useEffect(() => {
    getJokeOfTheDay();
  }, []);

  const getJokeOfTheDay = () => {
    axios
      .get("https://api.jokes.one/jod")
      .then((res) => {
        updateJoke(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section data-aos="fade-left" className="card" id="joke-of-the-day">
      <section className="card-container">
        <h1>Joke of the day</h1>
        {joke.contents ? (
          <section>
            <p>{joke.contents.jokes[0].joke.text}</p>
          </section>
        ) : (
          <section></section>
        )}
      </section>
    </section>
  );
};

export default RandomFact;
