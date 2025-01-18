import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import ComparePokemon from './components/ComparePokemon';
import FilterByType from './components/FilterByType';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [comparison, setComparison] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async (query) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
      setPokemon(response.data);
      setComparison(null); 
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

  const handleTypeSelect = async (type) => {
    try {
      if (type === "") {
        // Si no hay tipo seleccionado, obtener todos los pokémon
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemonList(response.data.results);
      } else {
        // Obtener pokémon por tipo
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        const pokemonOfType = response.data.pokemon.map(p => p.pokemon);
        setPokemonList(pokemonOfType.slice(0, 20)); // Limitamos a 20 pokémon
      }
    } catch (error) {
      console.error('Error al obtener pokémon:', error);
      alert('Error al cargar los pokémon');
    }
  };

  // Cargar pokémon iniciales
  useEffect(() => {
    handleTypeSelect("");
  }, []);

  return (
    <div className="app-container">
      <Header />
      <SearchBar onSearch={fetchPokemon} />
      <FilterByType onTypeSelect={handleTypeSelect} />
      <div className="pokemon-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        padding: '1rem',
        border: '2px solid #ccc',
        borderRadius: '8px',
        margin: '1rem'
      }}>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-item" style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ textTransform: 'capitalize', margin: '0 0 0.5rem 0' }}>
              {pokemon.name}
            </h3>
            <button 
              onClick={() => fetchPokemon(pokemon.name)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
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
