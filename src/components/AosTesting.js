import React, { useEffect } from "react";

const AosTesting = () => {
  const key = {
    1: "fade-up",
    2: "fade-down",
    3: "fade-left",
    4: "fade-right",
  };

  const list = [
    {
      name: Math.floor(Math.random() * 4) + 1,
      effect: key.name,
    },
  ];

  const mappedList = list.map((ele, i) => (
    <ListContent key={ele.name} name={ele.name} effect={ele.effect} />
  ));

  return (
    <section className="card" id="aos-testing-card">
      <h1>Aos Testing</h1>
      <ul>{mappedList}</ul>
    </section>
  );
};

const ListContent = (props) => <li data-aos={props.effect}>{props.name}</li>;
export default AosTesting;
