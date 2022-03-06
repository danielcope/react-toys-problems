import React, { useState, useEffect } from "react";

const TikTacToe = () => {
  const [winner, updateWinner] = useState("");
  const [player, updatePlayer] = useState("X");
  const [currentBoard, updateCurrentBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  useEffect(() => {
    checkForWinner();
  }, [currentBoard]);

  const swapPlayer = () => {
    let tempPlayer = "";

    if (player === "X") {
      tempPlayer = "O";
    } else {
      tempPlayer = "X";
    }

    updatePlayer(tempPlayer);
  };

  const squareClick = (squareClicked) => {
    const tempBoard = [...currentBoard];

    // top row
    if (squareClicked === 0) tempBoard[0][0] = player;
    if (squareClicked === 1) tempBoard[0][1] = player;
    if (squareClicked === 2) tempBoard[0][2] = player;

    // mid row
    if (squareClicked === 3) tempBoard[1][0] = player;
    if (squareClicked === 4) tempBoard[1][1] = player;
    if (squareClicked === 5) tempBoard[1][2] = player;

    // bot row
    if (squareClicked === 6) tempBoard[2][0] = player;
    if (squareClicked === 7) tempBoard[2][1] = player;
    if (squareClicked === 8) tempBoard[2][2] = player;

    updateCurrentBoard(tempBoard);
    swapPlayer();
  };

  const checkForWinner = () => {
    if (
      currentBoard[0][0] === "X" &&
      currentBoard[0][1] === "X" &&
      currentBoard[0][2] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[0][0] === "X" &&
      currentBoard[1][1] === "X" &&
      currentBoard[2][2] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[0][0] === "X" &&
      currentBoard[1][1] === "X" &&
      currentBoard[2][2] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[0][1] === "X" &&
      currentBoard[1][1] === "X" &&
      currentBoard[2][1] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[0][2] === "X" &&
      currentBoard[1][1] === "X" &&
      currentBoard[2][0] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[0][2] === "X" &&
      currentBoard[1][2] === "X" &&
      currentBoard[2][2] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[1][0] === "X" &&
      currentBoard[1][1] === "X" &&
      currentBoard[1][2] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[2][0] === "X" &&
      currentBoard[2][1] === "X" &&
      currentBoard[2][2] === "X"
    ) {
      updateWinner("X");
      return;
    } else if (
      currentBoard[0][0] === "O" &&
      currentBoard[0][1] === "O" &&
      currentBoard[0][2] === "O"
    ) {
      updateWinner("O");
      return;
    } else if (
      currentBoard[0][0] === "O" &&
      currentBoard[1][1] === "O" &&
      currentBoard[2][2] === "O"
    ) {
      updateWinner("O");
      return;
    } else if (
      currentBoard[0][0] === "O" &&
      currentBoard[1][1] === "O" &&
      currentBoard[2][2] === "O"
    ) {
      updateWinner("O");
      return;
    } else if (
      currentBoard[0][1] === "O" &&
      currentBoard[1][1] === "O" &&
      currentBoard[2][1] === "O"
    ) {
      updateWinner("O");
      return;
    } else if (
      currentBoard[0][2] === "O" &&
      currentBoard[1][1] === "O" &&
      currentBoard[2][0] === "O"
    ) {
      updateWinner("O");
      return;
    } else if (
      currentBoard[0][2] === "O" &&
      currentBoard[1][2] === "O" &&
      currentBoard[2][2] === "O"
    ) {
      updateWinner("O");
      return;
    } else if (
      currentBoard[1][0] === "O" &&
      currentBoard[1][1] === "O" &&
      currentBoard[1][2] === "O"
    ) {
      updateWinner("O");
      return;
    } else if (
      currentBoard[2][0] === "O" &&
      currentBoard[2][1] === "O" &&
      currentBoard[2][2] === "O"
    ) {
      updateWinner("O");
      return;
    }
  };

  const resetBoard = () => {
    updateCurrentBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    updateWinner("");
    updatePlayer("X");
  };

  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      {winner !== "" ? (
        <WinnerBanner winner={winner} resetBoard={resetBoard} />
      ) : (
        <div></div>
      )}
      <Board currentBoard={currentBoard} squareClick={squareClick} />
      <button className="mt-8 z-20" onClick={resetBoard}>
        Reset
      </button>
    </section>
  );
};

export const Board = (props) => {
  return (
    <ul className="tttboard">
      <section className="ttt-row">
        <li className="square" onClick={() => props.squareClick(0)}>
          <span>{props.currentBoard[0][0]}</span>
        </li>
        <li
          className="square border-l-2 border-r-2"
          onClick={() => props.squareClick(1)}
        >
          <span>{props.currentBoard[0][1]}</span>
        </li>
        <li className="square" onClick={() => props.squareClick(2)}>
          {" "}
          <span>{props.currentBoard[0][2]}</span>
        </li>
      </section>
      <section className="ttt-row">
        <li
          className="square border-t-2 border-b-2"
          onClick={() => props.squareClick(3)}
        >
          <span>{props.currentBoard[1][0]}</span>
        </li>
        <li className="square border-2" onClick={() => props.squareClick(4)}>
          {" "}
          <span>{props.currentBoard[1][1]}</span>
        </li>
        <li
          className="square  border-t-2 border-b-2"
          onClick={() => props.squareClick(5)}
        >
          {" "}
          <span>{props.currentBoard[1][2]}</span>
        </li>
      </section>
      <section className="ttt-row">
        <li className="square" onClick={() => props.squareClick(6)}>
          {" "}
          <span>{props.currentBoard[2][0]}</span>
        </li>
        <li
          className="square border-l-2 border-r-2"
          onClick={() => props.squareClick(7)}
        >
          {" "}
          <span>{props.currentBoard[2][1]}</span>
        </li>
        <li className="square" onClick={() => props.squareClick(8)}>
          {" "}
          <span>{props.currentBoard[2][2]}</span>
        </li>
      </section>
    </ul>
  );
};

export const WinnerBanner = (props) => {
  return (
    <section className="absolute w-[200px] h-[300px] z-[2] bg-black-200 flex flex-col justify-evenly items-center rounded-md">
      <h3>{props.winner} is the winner</h3>
    </section>
  );
};

export default TikTacToe;
