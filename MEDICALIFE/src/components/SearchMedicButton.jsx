import React, { useState } from 'react';
import axios from 'axios';

const SearchMedicButton = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/medics/search', {
        params: { searchText }
      });
      setResults(response.data);
      onSearch(response.data);
    } catch (error) {
      console.error('Error al buscar médicos:', error);
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar médico..."
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {results.map((medic) => (
          <li key={medic.id}>{medic.nombre} - {medic.especialidad}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMedicButton;
