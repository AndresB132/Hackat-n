import React from 'react';
import './FilterByType.css';

const FilterByType = ({ onTypeSelect }) => {
  const types = [
    { name: 'normal', color: '#A8A878' },
    { name: 'fire', color: '#F08030' },
    { name: 'water', color: '#6890F0' },
    { name: 'grass', color: '#78C850' },
    { name: 'electric', color: '#F8D030' },
    { name: 'ice', color: '#98D8D8' },
    { name: 'fighting', color: '#C03028' },
    { name: 'poison', color: '#A040A0' },
    { name: 'ground', color: '#E0C068' },
    { name: 'flying', color: '#A890F0' },
    { name: 'psychic', color: '#F85888' },
    { name: 'bug', color: '#A8B820' },
    { name: 'rock', color: '#B8A038' },
    { name: 'ghost', color: '#705898' },
    { name: 'dragon', color: '#7038F8' },
    { name: 'dark', color: '#705848' },
    { name: 'steel', color: '#B8B8D0' },
    { name: 'fairy', color: '#EE99AC' }
  ];

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filtrar por tipo</h3>
      <div className="type-grid">
        {types.map(type => (
          <button
            key={type.name}
            className="type-button"
            style={{ backgroundColor: type.color }}
            onClick={() => onTypeSelect(type.name)}
          >
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterByType;