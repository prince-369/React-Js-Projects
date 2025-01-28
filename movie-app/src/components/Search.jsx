import React, { useState, useEffect } from "react";

function Search({ setMovies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  useEffect(() => {
    if (!searchQuery.trim()) {
      setMovies([]);
      setErrorMessage(""); // Agar input empty ho to error message hata do
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=464883f68f2dfb4e8259a6bb9700b21c`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            setMovies(data.results);
            setErrorMessage(""); // Movies mil gayi, error message hata do
          } else {
            setMovies([]);
            setErrorMessage("No movies found. Try another search!"); // Error message set karo
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setMovies([]);
          setErrorMessage("Something went wrong. Please try again!"); // API error handle karo
        });
    }, 500); // 500ms debounce time

    return () => clearTimeout(delayDebounceFn); // Cleanup function to clear timeout
  }, [searchQuery, setMovies]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Your Movie Name..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Error message display */}
    </div>
  );
}

export default Search;
