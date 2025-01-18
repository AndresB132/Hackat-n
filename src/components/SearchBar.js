import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query.toLowerCase());
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} style={{ margin: '1rem', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Busca un Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', width: '200px', borderRadius: '5px' }}
      />
      <button type="submit" style={{ padding: '0.5rem', marginLeft: '1rem', backgroundColor: '#2a75bb', color: 'white', borderRadius: '5px' }}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
