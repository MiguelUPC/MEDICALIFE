import React, { useState } from 'react';

const SearchPatientButton = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Llamamos a la función onSearch pasando el texto de búsqueda
    onSearch(searchText);
  };

  const handleChange = (e) => {
   
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar paciente..."
        value={searchText}
        onChange={handleChange}
      />
      
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchPatientButton;
