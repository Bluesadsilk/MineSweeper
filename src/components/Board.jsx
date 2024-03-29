import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import WinAlert from './WinAlert';

function Board({ yLength, xLength, mines }) {
  // Función para generar un nuevo tablero
  const createNewBoard = () => {
    const newBoard = Array.from({ length: yLength }, () =>
      Array.from({ length: xLength }, () => ({
        TieneMina: false,
        EstaDestapado: false,
        MinasAlrededor: 0,
      }))
    );
    generateMines(newBoard);
    calculateAdjacentMines(newBoard);
    return newBoard;
  };

  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Función para reiniciar el juego
  function resetGame() {
    setBoard(createNewBoard());
    setGameOver(false);
    setGameWon(false);
  }

  // Función para generar minas aleatorias en el tablero
  const generateMines = (board) => {
    // Número de minas que deseas generar
    const totalMines = mines;
    let minesPlaced = 0;

    while (minesPlaced < totalMines) {
      const randomRow = Math.floor(Math.random() * board.length);
      const randomCol = Math.floor(Math.random() * board[0].length);

      if (!board[randomRow][randomCol].TieneMina) {
        board[randomRow][randomCol].TieneMina = true;
        minesPlaced++;
      }
    }
  };

  // Función para calcular y fijar el número de minas alrededor de cada casilla
  const calculateAdjacentMines = (board) => {
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0;
        // Verificar las 8 casillas adyacentes
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            const ni = i + di;
            const nj = j + dj;
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && board[ni][nj].TieneMina) {
              count++;
            }
          }
        }
        // Fijar el número de minas alrededor
        board[i][j].MinasAlrededor = count;
      }
    }
  };

  const openEmptyCells = (row, col, board) => {
    const updatedBoard = [...board];
    const rows = updatedBoard.length;
    const cols = updatedBoard[0].length;
    const openCellRecursive = (r, c) => {
      if (r < 0 || r > rows || c < 0 || c >= cols || updatedBoard[r][c].EstaDestapado) {
        return;
      }
      updatedBoard[r][c].EstaDestapado = true;
  
      // Verificar las 8 casillas adyacentes
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          const ni = r + di;
          const nj = c + dj;
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && updatedBoard[ni][nj].MinasAlrededor === 0) {
            openCellRecursive(ni, nj);
          }
        }
      }
    };
  
    openCellRecursive(row, col);
    return updatedBoard;
  };
  
  

  // Estado para el tablero
  const [board, setBoard] = useState(createNewBoard());

  // Función para destapar una celda y actualizar el estado
  const openCell = (row, col) => {
    const updatedBoard = [...board];
    updatedBoard[row][col].EstaDestapado = false;

    if (updatedBoard[row][col].TieneMina) {
      const updatedBoardWithMines = updatedBoard.map(row =>
        row.map(cell => ({
          ...cell,
          EstaDestapado: true
        }))
      );
      setBoard(updatedBoardWithMines);
      setGameOver(true);
    } else {
      const updatedBoardAfterOpen = openEmptyCells(row, col, updatedBoard);
      setBoard(updatedBoardAfterOpen);
      if (allNonmineCellsUncovered(updatedBoardAfterOpen)) {
        setGameOver(true);
        setGameWon(true);
      }
    }
  };

  // Función para verificar si todas las celdas sin minas están destapadas
  const allNonmineCellsUncovered = (board) => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (!board[row][col].TieneMina && !board[row][col].EstaDestapado) {
          return false;
        }
      }
    }
    return true;
  };


  // Función para renderizar el tablero
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            x={colIndex}
            y={rowIndex}
            TieneMina={cell.TieneMina}
            EstaDestapado={cell.EstaDestapado}
            MinasAlrededor={cell.MinasAlrededor}
            updateBoard={() => openCell(rowIndex, colIndex)}
          />
        ))}
      </div>
    ));
  };

  useEffect(() => {
    if (gameOver && gameWon) {
      // Aquí puedes realizar cualquier acción adicional que desees cuando se gana el juego
    }
  }, [gameOver, gameWon]);

  return (
    <>
     {gameOver && <WinAlert resetGame={resetGame} winner={gameWon} />}

      <button onClick={resetGame}>Reset game</button>
      <div className="board">{renderBoard()}</div>
      <footer>
        <h1>@Bluesadsilk</h1>
      </footer>
    </>
  );
}

export default Board;
