import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [mines, setMines] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);

  const setWidthPlus = () => {
    setWidth(width + 5);
  };

  const setHeightPlus = () => {
    setHeight(height + 5);
  };

  const setMinesPlus = () => {
    if (mines < height * width) {
      setMines(mines + 5);
    }
  };

  const setWidthLess = () => {
    if (width>=15) {
      setWidth(width - 5);
    }
    
  };

  const setHeightLess = () => {
    if (height>=15) {
      setHeight(height - 5);
    }
  };

  const setMinesLess = () => {
    if (mines>=15) {
      setMines(mines - 5);
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
