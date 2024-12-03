import React from 'react';
import MovieItem from './MovieItem';

const Movies = (props) => {
  return (
    <div>
      {props.myMovies.map((movie) => (
        <MovieItem mymovie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default Movies;
