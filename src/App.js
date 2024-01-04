import { useState } from "react";

function Square( {value, handleClick} ) {  /* The curly braces surrounding the props are important - it is a JSON object */
  
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));

  function handleSquareClick(i) {
    console.log(`handleSquareClick with value ${i}`);

    // create a copy of squareValues (instead of mutating it in place)
    const newSquareValues = squareValues.splice(0);
    newSquareValues[i] = 'X';
    setSquareValues(newSquareValues);  
  }

  return (
    <>
      <div className="board-row">
        <Square value={squareValues[0]} handleClick={ () => { handleSquareClick(0)} } />
        <Square value={squareValues[1]} handleClick={ () => { handleSquareClick(1)} } />
        <Square value={squareValues[2]} handleClick={ () => { handleSquareClick(2)} } />
      </div>
      <div className="board-row">
        <Square value={squareValues[3]} handleClick={() => { handleSquareClick(3)} } />
        <Square value={squareValues[4]} handleClick={() => { handleSquareClick(4)} } />
        <Square value={squareValues[5]} handleClick={() => { handleSquareClick(5)} }/>
      </div>
      <div className="board-row">
        <Square value={squareValues[6]} handleClick={() => { handleSquareClick(6)} } />
        <Square value={squareValues[7]} handleClick={() => { handleSquareClick(7)} }/>
        <Square value={squareValues[8]} handleClick={() => { handleSquareClick(8)} } />
      </div>
    </>
  );
}
