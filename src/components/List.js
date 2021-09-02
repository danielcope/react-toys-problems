import React, { useState } from "react";

const List = () => {
  const [input, updateInput] = useState("");
  const [toDoList, updateToDoList] = useState([]);
  const [mappedToDoList, updateMappedToDoList] = useState([]);

  const addToList = () => {
    let newArr = toDoList;
    newArr.push(input);
    updateToDoList(newArr);

    let mappedToDoList = newArr.map((e, i) => (
      <section key={i}>
        <span>{e}</span>
        <button onClick={() => removeFromList(e)}>X</button>
      </section>
    ));

    updateMappedToDoList(mappedToDoList);
    updateInput("");
  };

  const removeFromList = (e) => {
    let newArr = toDoList;
    let i = newArr.indexOf(e);
    newArr.splice(i, 1);
    updateToDoList(newArr);

    let mappedToDoList = newArr.map((e, i) => (
      <section key={i}>
        <span>{e}</span>
        <button onClick={() => removeFromList(e)}>X</button>
      </section>
    ));

    updateMappedToDoList(mappedToDoList);
  };

  return (
    <div className="card">
      <div>
        <input
          type="text"
          placeholder="Add item here..."
          value={input}
          onChange={(e) => updateInput(e.target.value)}
        />
        <button onClick={() => addToList()}>Add</button>
      </div>
      <section className="list">{mappedToDoList}</section>
    </div>
  );
};

export default List;
