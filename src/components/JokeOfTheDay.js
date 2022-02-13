import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomFact = (props) => {
  const [joke, updateJoke] = useState({});
  const [error, updateError] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    getJokeOfTheDay();
  }, []);

  const getJokeOfTheDay = async () => {
    await axios
      .get("https://api.jokes.one/jod")
      .then((res) => {
        updateError({
          isError: false,
          message: "",
        });
        updateJoke(res.data);
      })
      .catch((err) => {
        console.log(err);
        updateError({
          isError: true,
          message: "Too many requests for the hour. Come back later.",
        });
      });
  };

  const jokeArr = () => {
    let result = ["something", "something"];
    let { text } = joke.contents.jokes[0].joke;

    for (let i = 0; i < text.length; i++) {}

    return result.map((ele, i) => <span>{ele}</span>);
  };

  return (
    <section data-aos="fade-left" className="card" id="joke-of-the-day-card">
      <section className="card-container">
        <h1>Joke of the day</h1>
        {joke.contents ? (
          <section>
            <h2>Title: {joke.contents.jokes[0].joke.title}</h2>
            <p>{joke.contents.jokes[0].joke.text}</p>
            <p>{jokeArr}</p>
          </section>
        ) : (
          <section></section>
        )}
        {error.isError ? (
          <section>
            <h2 className="error-message">{error.message}</h2>
          </section>
        ) : (
          <section></section>
        )}
      </section>
    </section>
  );
};

export default RandomFact;
