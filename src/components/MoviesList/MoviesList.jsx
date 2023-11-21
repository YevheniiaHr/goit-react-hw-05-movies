import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { List, MovieItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  if (!movies || movies.length === 0) {
    return <p> Movies not found</p>;
  }

  return (
    <List>
      {movies.map(({ id, original_title }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </MovieItem>
      ))}
    </List>
  );
};

export default MoviesList;
