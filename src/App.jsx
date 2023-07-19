import React, {useState } from "react";
import TowerOfHanoi from './components/TowerOfHonoi'
import RockPaperScissor from './components/RockPaperScissor'
import TicTacToe from './components/TicTacToe'
import Navbar from './components/Navbar'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "TowerOfHanoi",
    element: <TowerOfHanoi />,
  },
  {
    path: "TicTacToe",
    element: <TicTacToe />,
  },
  {
    path: "RockPaperScissor",
    element: <RockPaperScissor />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}
export default App
