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

  return (
    <section data-aos="fade-left" id="joke-of-the-day-card">
      <section>
        {joke.contents ? (
          <section>
            <h3>Title: {joke.contents.jokes[0].joke.title}</h3>
            <p>{joke.contents.jokes[0].joke.text}</p>
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
