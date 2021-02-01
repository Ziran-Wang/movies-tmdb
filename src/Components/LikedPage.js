import React, { useState, useEffect } from 'react';
import Card from './Card';
import {
  API_KEY as apiKey,
  SESSION_ID as sessionId,
  ACCOUNT_ID as accountId,
} from './constant';

export default function LikedPage() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  }, []);

  return (
    <div>
      <h2>Favorite movies</h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            voteAverage={movie.vote_average}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
