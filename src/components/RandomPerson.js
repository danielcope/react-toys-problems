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
    <section className="card">
      <section className="card-container">
        <h1>Random Person</h1>
        <button onClick={() => getPerson()}>New Person</button>
        <section className="person-info-container">
          <h2>Name: {personName}</h2>
          <h2>Phone: {personPhone}</h2>
          <h2>Email: {personEmail}</h2>
        </section>
      </section>
    </section>
  );
};

export default RandomPerson;
