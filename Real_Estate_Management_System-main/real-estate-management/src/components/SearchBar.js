import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <h3>Search for</h3>
      <input
        type="text"
        placeholder="Search for Properties"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  );
};

export default SearchBar;
