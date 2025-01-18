import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterByType = ({ onTypeSelect }) => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener la lista de tipos desde la API
    axios.get('https://pokeapi.co/api/v2/type')
      .then((response) => {
        setTypes(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los tipos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando tipos...</p>;
  }

  return (
    <div>
      <h2>Filtrar por tipo</h2>
      <select onChange={(e) => onTypeSelect(e.target.value)}>
        <option value="">Todos los Pokémon</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByType;
