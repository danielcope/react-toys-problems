import React, { useState } from "react";
import axios from "axios";

const RandomPerson = () => {
  const [person, updatePerson] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const getPerson = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${randomNum}`)
      .then((res) => {
        const person = {
          name: res.data.name,
          phone: res.data.phone,
          email: res.data.email,
        };

        updatePerson(person);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section
      id="random-person-card"
      className="w-11/12 h-11/12 flex flex-col justify-center items-center"
    >
      <button onClick={() => getPerson()} className="w-28">
        New Person
      </button>
      <section className="person-info-container">
        <p>Name: {person.name}</p>
        <p>Phone: {person.phone}</p>
        <p>Email: {person.email}</p>
      </section>
    </section>
  );
};

export default RandomPerson;
