import { getMovieDetails } from 'components/api';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Button, Container, LinkAdd, ListAdd } from './MoviesDetails.styled';
import Loader from 'components/Loader/Loader';
import { List } from 'components/MoviesList/MoviesList.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  const {
    original_title,
    popularity,
    overview,
    genres,
    release_date,
    poster_path,
  } = movieInfo || {};

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go Back</Button>
      </Link>
      {isLoading && <Loader />}
      {movieInfo && (
        <Container>
          <img
            width={300}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://via.placeholder.com/300x300/258DC8/E0F6FD?text=Image+is+not+availible`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {original_title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </div>
        </Container>
      )}
      <div>
        <h3>Additional information</h3>
        <ListAdd>
          <li>
            <LinkAdd to="cast">Cast</LinkAdd>
          </li>
          <li>
            <LinkAdd to="reviews">Reviews</LinkAdd>
          </li>
        </ListAdd>
        <Outlet />
      </div>
    </>
  );
};

export default MoviesDetails;
