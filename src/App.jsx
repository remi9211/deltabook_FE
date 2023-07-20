import React, {useState } from "react";
import TowerOfHanoi from './components/TowerOfHonoi'
import RockPaperScissor from './components/RockPaperScissor'
import TicTacToe from './components/TicTacToe'
import Navbar from './components/Navbar'
import './App.css'
import {Route, Routes,} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/TicTacToe" element={<TicTacToe/>} />
        <Route path="/RockPaperScissor" element={<RockPaperScissor/>} />
        <Route path="/TowerOfHanoi" element={<TowerOfHanoi/>} />
      </Routes>
    </>
  )
}
export default App
