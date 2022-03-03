import React, { useState } from "react";
import axios from "axios";

const RandomPerson = () => {
  const [personName, updatePersonName] = useState("");
  const [personPhone, updatePersonPhone] = useState("");
  const [personEmail, updatePersonEmail] = useState("");

  const getPerson = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${randomNum}`)
      .then((res) => {
        updatePersonName(res.data.name);
        updatePersonPhone(res.data.phone);
        updatePersonEmail(res.data.email);
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
        <p>Name: {personName}</p>
        <p>Phone: {personPhone}</p>
        <p>Email: {personEmail}</p>
      </section>
    </section>
  );
};

export default RandomPerson;
