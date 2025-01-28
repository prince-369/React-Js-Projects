import React, { useState } from "react";

const SearchBar = ({ setLocation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  let debounceTimeout;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    // Clear previous debounce timeout
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      if (e.target.value === "") {
        setLocation("Arrah"); 
      } else {
        setLocation(e.target.value);
      }
    }, 500); 
  };

  const handleClear = () => {
    setSearchTerm(""); 
    setLocation("Arrah"); 
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search city..."
        className="search-bar"
      />
      {searchTerm && (
        <button className="clear-btn" onClick={handleClear}>
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
