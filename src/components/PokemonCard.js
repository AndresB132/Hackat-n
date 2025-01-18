import React from 'react';

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', margin: '1rem', textAlign: 'center' }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '150px' }} />
      <p><strong>Tipo:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Estadísticas:</strong></p>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCard;
