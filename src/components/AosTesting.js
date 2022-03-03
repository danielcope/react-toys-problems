import React from "react";

const AosTesting = () => {
  const list = [
    {
      effect: "fade-right",
    },
    {
      effect: "fade-left",
    },
    {
      effect: "fade-up",
    },
    {
      effect: "fade-down",
    },
  ];

  const mappedList = list.map((ele, i) => (
    <ListContent key={i} name={ele.effect} effect={ele.effect} />
  ));

  return <ul>{mappedList}</ul>;
};

const ListContent = (props) => <li data-aos={props.effect}>{props.name}</li>;
export default AosTesting;
