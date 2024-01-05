import { useState } from "react";

function Square({ value, handleClick }) {  /* The curly braces surrounding the props are important - it is a JSON object */

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function Board({ currentPlayer, squareValues, onEndOfTurn }) {

  console.log('Board loaded');

  function handleSquareClick(i) {

    console.log(`handleSquareClick with value ${i}. currentPlayer = ${currentPlayer}. squareValues = ${squareValues}`);

    // if a square already has a value or a winner is already found, return immediately
    if (squareValues[i] || calculateWinner(squareValues)) {
      console.log('returning from handleSquareClick. Nothing to do.')
      return;
    }

    // create a copy of squareValues (instead of mutating it in place)
    const newSquareValues = squareValues.slice(0);
    newSquareValues[i] = currentPlayer;

    onEndOfTurn(newSquareValues);
  }

  const winner = calculateWinner(squareValues);
  let status = winner ?
    `Game over! Winner: ${winner}!` :
    `Next turn for player: ${currentPlayer}`;

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squareValues[0]} handleClick={() => { handleSquareClick(0) }} />
        <Square value={squareValues[1]} handleClick={() => { handleSquareClick(1) }} />
        <Square value={squareValues[2]} handleClick={() => { handleSquareClick(2) }} />
      </div>
      <div className="board-row">
        <Square value={squareValues[3]} handleClick={() => { handleSquareClick(3) }} />
        <Square value={squareValues[4]} handleClick={() => { handleSquareClick(4) }} />
        <Square value={squareValues[5]} handleClick={() => { handleSquareClick(5) }} />
      </div>
      <div className="board-row">
        <Square value={squareValues[6]} handleClick={() => { handleSquareClick(6) }} />
        <Square value={squareValues[7]} handleClick={() => { handleSquareClick(7) }} />
        <Square value={squareValues[8]} handleClick={() => { handleSquareClick(8) }} />
      </div>
    </>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

}

export default function Game() {
  
  const initialHistory = [Array(9).fill(null)];     // history is an array of arrays
  const [history, setHistory] = useState(initialHistory); 
  
  const [currentTurn, setCurrentTurn] = useState(0);

  // const squareValues = history[history.length - 1];
  const squareValues = history[currentTurn];
  
  const player = {
    X: 'X',
    O: 'O'
  }
  const [currentPlayer, setCurrentPlayer] = useState(player.X);
  

  console.log(`Game loaded. currentTurn = ${currentTurn}. history = ${history}. history[currentTurn] = ${history[currentTurn]}`);

  function handleEndOfTurn(newSquareValues) {
    console.log(`in handleEndOfTurn. newSquareValues = ${newSquareValues}. currentPlayer = ${currentPlayer}`);

    // setHistory([...history, newSquareValues]);
    const newHistory = [...history.slice(0, currentTurn + 1), newSquareValues];
    setHistory(newHistory);
    setCurrentTurn(newHistory.length - 1);

    setCurrentPlayer(currentPlayer === player.X ? player.O : player.X);

  }

  function playFromTurn(turnIndex) {
    console.log(`playFromTurn(): turnIndex=${turnIndex}`);

    setCurrentTurn(turnIndex);

    // set current player to be the one that corresponds to the current turnIndex. 0 => PlayerX, 1 => is PlayerO, 2 => PlayerX etc.
    setCurrentPlayer(turnIndex % 2 === 0 ? player.X : player.O);
  }

  const gameHistory = history.map((squareValues, turnIndex) => {

    const description = turnIndex > 0 ? `${currentPlayer} finished turn ${turnIndex}` : 'Start Game';
    const buttonText = turnIndex > 0 ? `Play this turn` : ``;
    return (
      <li key={turnIndex}>
        <span>Turn #{turnIndex} values: {squareValues}</span>
        <button onClick={() => { playFromTurn(turnIndex) }}> Go to turn #{turnIndex} </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board currentPlayer={currentPlayer} squareValues={squareValues} onEndOfTurn={handleEndOfTurn} />
      </div>
      <div className="game-info">
        Game History: <br />
        {gameHistory}
      </div>
    </div>
  );
}
