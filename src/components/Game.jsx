import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [mines, setMines] = useState(10);

  const setWidthPlus = () => {
    setWidth(width + 5);
  };

  const setHeightPlus = () => {
    setHeight(height + 5);
  };

  const setMinesPlus = () => {
    setMines(mines + 5);
  };

  const setWidthLess = () => {
    setWidth(width - 5);
  };

  const setHeightLess = () => {
    setHeight(height - 5);
  };

  const setMinesLess = () => {
    setMines(mines - 5);
  };

  return (
    <>
      <h1>Altura={height}</h1>
      <h1>Anchura={width}</h1>
      <h1>Minas={mines}</h1>
      <button onClick={setHeightPlus}>Altura+</button>
      <button onClick={setWidthPlus}>Ancho+</button>
      <button onClick={setMinesPlus}>Minas+</button>
      <button onClick={setHeightLess}>Altura-</button>
      <button onClick={setWidthLess}>Ancho-</button>
      <button onClick={setMinesLess}>Minas-</button>
      <Board
        yLength={height}
        xLength={width}
        mines={mines}
      />
    </>
  );
};

export default Game;
