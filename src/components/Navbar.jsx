import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        Home Page
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/TowerOfHanoi">Tower Of Hanoi</Link>
        </li>
        <li>
          <Link to="/TicTacToe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/RockPaperScissor">Rock Paper Scissors</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
