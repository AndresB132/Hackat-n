import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import ComparePokemon from './components/ComparePokemon';
import FilterByType from './components/FilterByType';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [comparison, setComparison] = useState(null);

  const fetchPokemon = async (query) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
      setPokemon(response.data);
      setComparison(null); // Reset comparison
    } catch (error) {
      alert('Pokémon no encontrado');
    }
  };

  const comparePokemon = async (first, second) => {
    try {
      const firstResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${first}`);
      const secondResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${second}`);

      setComparison({
        first: firstResponse.data,
        second: secondResponse.data,
      });
    } catch (error) {
      alert('Uno o ambos Pokémon no fueron encontrados');
    }
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={fetchPokemon} />
      <FilterByType />
      <PokemonCard pokemon={pokemon} />
      <ComparePokemon onCompare={comparePokemon} />
      {comparison && (
        <div style={{ textAlign: 'center' }}>
          <h3>Comparación:</h3>
          <p>
            {comparison.first.name.toUpperCase()} vs {comparison.second.name.toUpperCase()}
          </p>
          <p>
            {comparison.first.stats[0].base_stat} HP vs {comparison.second.stats[0].base_stat} HP
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
