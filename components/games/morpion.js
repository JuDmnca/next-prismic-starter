import styles from "../../styles/games/morpion.module.scss";

import { useState } from "react";
import Square from "./square";

export default function Morpion() {
  const rows = Array(3).fill(null);
  // Squares
  const [squares, setSquare] = useState(Array(9).fill(null));
  // Next player
  const [xIsNext, setNextPlayer] = useState(true);

  const updateSquare = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquare(newSquares);
    setNextPlayer(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => updateSquare(i)} />;
  };

  const replay = () => {
    setSquare(Array(9).fill(null));
    setNextPlayer(true);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner + " a gagné";
  } else {
    status = "Prochain joueur : " + (xIsNext ? "X" : "O");
  }

  return (
    <section>
      <div className={styles.infos}>
        <div>{status}</div>
        <div onClick={() => replay()}>Rejouer</div>
      </div>
      <div className={styles.board}>
        {rows.map((row, index) => {
          return (
            <div key={index} className={styles.board__row}>
              {renderSquare(index * 3)}
              {renderSquare(index * 3 + 1)}
              {renderSquare(index * 3 + 2)}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
