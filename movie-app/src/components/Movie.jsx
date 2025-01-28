import React, { useState } from "react";
import Search from "./Search"; 
import Front from "./Front"; 

function Movie() {
  const [movies, setMovies] = useState([]);

  return (
    <div>

      <h2 className="heading">PS9 TV 📺</h2>

      <Search setMovies={setMovies} />


      {movies.length > 0 && (
        <div className="movie-container">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-language">
                  Language: {movie.original_language}
                </p>
                <p className="movie-release-date">
                  Release Date: {movie.release_date}
                </p>
              </div>
              <div className="movie-hover">
                <p className="movie-rating">Rating: {movie.vote_average}</p>
                <p className="movie-overview">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      
      <Front />
    </div>
  );
}

export default Movie;
