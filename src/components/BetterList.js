import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function BetterList() {
  const [input, updateInput] = useState("");
  const [mappedList, updateMappedList] = useState([]);
  const [list, updateList] = useState([]);

  const addToList = () => {
    if (input === "") return;
    let arr = [...list];
    arr.push(input);
    updateList(arr);
    updateInput("");
  };

  useEffect(() => {
    updateMappedList(
      list.map((ele, i) => (
        <BetterListItem
          key={i}
          text={ele}
          i={i}
          deleteFromList={() => {
            let arr = [...list];
            arr.splice(i, 1);
            updateList(arr);
          }}
        />
      ))
    );
  }, [list]);

  const handleKeypress = (e) => {
    if (e.keyCode === 13 && input !== "") {
      addToList();
    }
  };

  const clearList = () => {
    updateList([]);
  };

  return (
    <section>
      <input
        placeholder="add list item ..."
        onChange={(e) => updateInput(e.target.value)}
        type="text"
        value={input}
        onKeyDown={handleKeypress}
      />
      <button onClick={() => addToList()}>add</button>
      <button onClick={() => clearList()}>reset</button>
      <ul className="mt-3">{mappedList}</ul>
    </section>
  );
}

export const BetterListItem = (props) => {
  return (
    <li className="flex just w-full justify-between mt-3">
      <p className="break-words max-w-[150px] whitespace-normal">
        {props.text}
      </p>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={(e) => props.deleteFromList(props.i)}
        className="trash-can"
      />
    </li>
  );
};

export default BetterList;
