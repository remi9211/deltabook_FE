import React, { useState, useEffect } from "react";
import "../stylesheet/TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [boxText, setBoxText] = useState(Array(9).fill(""));

  const wins = [
    [0, 1, 2, 0, 3, 6],
    [3, 4, 5, 0, 13, 6],
    [6, 7, 8, 0, 23, 6],
    [0, 3, 6, -6, 13, 3],
    [1, 4, 7, 0, 13, 3],
    [2, 5, 8, 6, 13, 3],
    [0, 4, 8, 0, 13, 4],
    [2, 4, 6, 0, 13, 2],
  ];

  const changeTurn = () => {
    return turn === "X" ? "O" : "X";
  };

  useEffect(() => {
    checkWin();
  }, [boxText]);

  const checkWin = () => {
    wins.forEach((e) => {
      if (
        boxText[e[0]] !== "" &&
        boxText[e[0]] === boxText[e[1]] &&
        boxText[e[1]] === boxText[e[2]]
      ) {
        setIsGameOver(true);
        setTimeout(function () {
          if (window.confirm(boxText[e[0]] + " Wins! Play Again?")) {
            handleReset();
          } else {
            handleReset();
          }
        }, 40);
      }
    });
  };

  const handleBoxClick = (index) => {
    if (boxText[index] === "" && !isGameOver) {
      const newBoxText = [...boxText];
      newBoxText[index] = turn;
      setBoxText(newBoxText);
      setTurn(changeTurn());
    }
  };

  const handleReset = () => {
    setBoxText(Array(9).fill(""));
    setTurn("X");
    setIsGameOver(false);
  };

  return (
    <>
      <div className="TicTacToe">
        <h1 className="title">Welcome To Tic Tac Toe</h1>
        <div className="player">
          <span className="info">Turn for: {turn}</span>
        </div>
        <div className="gameContainer">
          <div className="container">
            <div className="line"></div>
            {boxText.map((value, index) => (
              <div
                key={index}
                className="box"
                onClick={() => handleBoxClick(index)}
              >
                <span className="boxtext">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gameInfo">
          <button
            id="reset"
            className="btn btn-secondary btn-lg"
            onClick={handleReset}
          >
            Start New Game
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
