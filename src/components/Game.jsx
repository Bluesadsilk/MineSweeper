import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [mines, setMines] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);
  

  const setWidthPlus = () => {
    setWidth(width + 1);
  };

  const setHeightPlus = () => {
    setHeight(height + 1);
  };

  const setMinesPlus = () => {
    if (mines < height * width) {
      setMines(mines + 1);
    }
  };

  const setWidthLess = () => {
    if (width >= 2) {
      setWidth(width - 1);
    }
    if (mines > height * (width - 1)) {
      setMines(height * (width - 1));
    }
  };

  const setHeightLess = () => {
    if (height >= 2) {
      setHeight(height - 1);
    }
    if (mines > (height - 1) * width) {
      setMines((height - 1) * width);
    }
  };

  const setMinesLess = () => {
    if (mines >= 1) {
      setMines(mines - 1);
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <>
      <h1 className='mainTitle'>MineSweeper</h1>
      <div className='header'>
        <div className='headSection'>
          <div className='initButtonsSection'>
            <h1>Height: {height}</h1>
            <button onClick={setHeightLess}>-</button>
            <button onClick={setHeightPlus}>+</button>
          </div>
        </div>
        <div className='headSection'>
          <div className='initButtonsSection'>
            <h1>Width: {width}</h1>
            <button onClick={setWidthLess}>-</button>
            <button onClick={setWidthPlus}>+</button>
          </div>
        </div>
        <div className='headSection'>
          <div className='initButtonsSection'>
            <h1>💣: {mines}</h1>
            <button onClick={setMinesLess}>-</button>
            <button onClick={setMinesPlus}>+</button>
          </div>
        </div>
      </div>
  
      <button className={gameStarted ? 'hideButton gameStarted' : 'hideButton'} onClick={handleStartGame}>Start</button>

      {/* Renderizar el tablero solo si el juego ha comenzado */}
      {gameStarted && (
        <Board
          yLength={height}
          xLength={width}
          mines={mines}
        />
      )}
    </>
  );
};

export default Game;
 