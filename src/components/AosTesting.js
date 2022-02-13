import React from "react";

const AosTesting = () => {
  const list = [
    {
      name: "1",
      effect: "fade-right",
    },
    {
      name: "2",
      effect: "fade-left",
    },
    {
      name: "3",
      effect: "fade-up",
    },
    {
      name: "4",
      effect: "fade-down",
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
