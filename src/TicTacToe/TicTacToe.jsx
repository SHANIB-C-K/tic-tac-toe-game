import React from "react";
import cross_icon from "../assets/cross.png";
import circle_icon from "../assets/circle.png";

const TicTacToe = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe <span>Game</span>
        </h1>
        {/* board section */}
        <div className="board">

        </div>
        {/* button section */}
        <button className="reset">Reset</button>
      </div>
    </>
  );
};

export default TicTacToe;
