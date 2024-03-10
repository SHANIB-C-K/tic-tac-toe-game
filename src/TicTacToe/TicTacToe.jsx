import React from "react";
import cross_icon from "../assets/cross.png";
import circle_icon from "../assets/circle.png";
import "./TicTacToe.css";

const TicTacToe = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe <span>Game</span>
        </h1>
        {/* board section */}
        <div className="board">
          <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
        {/* button section */}
        <div style={{ marginBottom: "50px" }}>
          <button className="reset">Reset</button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
