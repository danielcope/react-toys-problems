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
    <section data-aos="fade-right" id="random-person-card">
      <section>
        <button onClick={() => getPerson()}>New Person</button>
        <section className="person-info-container">
          <h3>Name: {personName}</h3>
          <h3>Phone: {personPhone}</h3>
          <h3>Email: {personEmail}</h3>
        </section>
      </section>
    </section>
  );
};

export default RandomPerson;
