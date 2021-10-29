import React, { useState } from "react";
import Separator from "../components/Icons/Separator";

const List = () => {
  const [input, updateInput] = useState("");
  const [toDoList, updateToDoList] = useState([]);
  const [mappedToDoList, updateMappedToDoList] = useState([]);

  const addToList = () => {
    let newArr = toDoList;
    newArr.push(input);
    updateToDoList(newArr);

    let mappedToDoList = newArr.map((e, i) => (
      <section key={i} className="to-do-list-item">
        <span className="to-do-list-text">{e}</span>
        <section className="to-do-list-buttons">
          {/* <div className="pencil">&#9998;</div> */}
          <div onClick={() => removeFromList(e)} className="trash-can">
            &#128465;
          </div>
        </section>
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
      <section key={i} className="to-do-list-item">
        <span className="to-do-list-text">{e}</span>
        <section className="to-do-list-buttons">
          {/* <div className="pencil">&#9998;</div> */}
          <div onClick={() => removeFromList(e)} className="trash-can">
            &#128465;
          </div>
        </section>
      </section>
    ));

    updateMappedToDoList(mappedToDoList);
  };

  return (
    <section className="card">
      <section className="card-container">
        <h1>To-Do List</h1>
        <section>
          <input
            type="text"
            placeholder="Add item here..."
            value={input}
            onChange={(e) => updateInput(e.target.value)}
          />
          <button onClick={() => addToList()}>Add</button>
        </section>
        <Separator />
        <section className="list">{mappedToDoList}</section>
      </section>
    </section>
  );
};

export default List;
