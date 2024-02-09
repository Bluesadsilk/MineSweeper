import React from 'react';

const WinAlert = ({ resetGame, winner }) => {

  const handleClick = () =>{
    resetGame();
  }

  const gameWon = () =>{
    return(
        <>
        <h1>Congratulations</h1>
        <h2>You have won the game</h2>
        <button onClick={handleClick}>Reset Game</button>
        </>
    )
  }
  const gameLost = () => {
    return(
        <>
        <h1>Game Over</h1>
        <h2>You have lost the game</h2>
        <button onClick={handleClick}>Reset Game</button>
        </>
    )
  }

  return (
    winner ? gameWon() : gameLost()
  );
};

export default WinAlert;
