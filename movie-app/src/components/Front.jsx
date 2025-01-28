import React, { useState, useEffect } from "react";
import "./Movie.css";

function Front() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=464883f68f2dfb4e8259a6bb9700b21c"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results); 
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h2 className="heading">Popular Movies</h2>
      <div className="movie-container">
        {movieList.map((movie) => (
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
    </div>
  );
}

export default Front;
