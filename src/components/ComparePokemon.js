import React, { useState } from 'react';

const ComparePokemon = ({ onCompare }) => {
  const [firstPokemon, setFirstPokemon] = useState('');
  const [secondPokemon, setSecondPokemon] = useState('');

  const handleCompare = (e) => {
    e.preventDefault();
    onCompare(firstPokemon.toLowerCase(), secondPokemon.toLowerCase());
  };

  return (
    <form onSubmit={handleCompare} style={{ textAlign: 'center', margin: '1rem' }}>
      <input
        type="text"
        placeholder="Primer Pokémon"
        value={firstPokemon}
        onChange={(e) => setFirstPokemon(e.target.value)}
        style={{ padding: '0.5rem', margin: '0.5rem', borderRadius: '5px' }}
      />
      <input
        type="text"
        placeholder="Segundo Pokémon"
        value={secondPokemon}
        onChange={(e) => setSecondPokemon(e.target.value)}
        style={{ padding: '0.5rem', margin: '0.5rem', borderRadius: '5px' }}
      />
      <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#2a75bb', color: 'white', borderRadius: '5px' }}>
        Comparar
      </button>
    </form>
  );
};

export default ComparePokemon;
