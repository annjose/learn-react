import { useState } from "react";

function Square({ value, handleClick }) {  /* The curly braces surrounding the props are important - it is a JSON object */

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {

  const [squareValues, setSquareValues] = useState(Array(9).fill(null));

  const player = {
    X: 'X',
    O: 'O'
  }
  const [currentPlayer, setCurrentPlayer] = useState(player.X);

  function handleSquareClick(i) {
    console.log(`handleSquareClick with value ${i}. currentPlayer = ${currentPlayer}`);

    // if a square already has a value or a winner is already found, return immediately
    if (squareValues[i] || calculateWinner(squareValues)) {
      console.log('returning from handleSquareClick. Nothing to do.')
      return;
    }

    // create a copy of squareValues (instead of mutating it in place)
    const newSquareValues = squareValues.splice(0);
    newSquareValues[i] = currentPlayer;
    setSquareValues(newSquareValues);

    setCurrentPlayer(currentPlayer == player.X ? player.O : player.X);
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
