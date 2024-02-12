import React from 'react';

const WinAlert = ({ resetGame, winner }) => {

  const handleClick = () => {
    resetGame();
  };

  return (
    <>
    <div className='modalWin'>
      <h1>{winner ? 'Congratulations' : 'Game Over'}</h1>
      <h2>{winner ? 'You have won the game' : 'You have lost the game'}</h2>
      <button className={winner ? 'won' : 'lost'} onClick={handleClick}></button>
    </div>
  </>
  
  );
};

export default WinAlert;
