// Import the moves array using named import from data.js
import { moves } from './data';
import { PokeMoveCard } from './PokeMoveCard';

export const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      {/* Render the moves array */}
      <ul>
        {moves.map((move) => (
        //   <li key={move.id}>
        //     <strong>{move.move}</strong>
        //   </li>
          <PokeMoveCard key={move.id} {...move} />
        ))}
      </ul>

    </div>
  );
};