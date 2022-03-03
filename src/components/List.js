import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
          <div onClick={() => removeFromList(e)} className="trash-can">
            <FontAwesomeIcon icon={faTrash} />
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
          <div onClick={() => removeFromList(e)} className="trash-can">
            &#128465;
          </div>
        </section>
      </section>
    ));

    updateMappedToDoList(mappedToDoList);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13 && input !== "") {
      addToList();
    }
  };

  return (
    <section>
      <section>
        <input
          type="text"
          placeholder="Add item here..."
          value={input}
          onChange={(e) => updateInput(e.target.value)}
          onKeyDown={handleKeypress}
        />
        <button onClick={() => addToList()}>Add</button>
      </section>
      <section className="list">{mappedToDoList}</section>
    </section>
  );
};

export default List;
