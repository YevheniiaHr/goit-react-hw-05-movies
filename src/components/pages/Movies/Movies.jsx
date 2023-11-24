import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { getByQuery } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;
    const fetchByQuery = async () => {
      setIsLoading(true);
      try {
        const movieQuery = await getByQuery(currentQuery);
        const currentMovie = movieQuery.results;
        setMovies(currentMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchByQuery();
  }, [searchParams]);
  return (
    <>
      <SearchBar setSearchParams={setSearchParams} />
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
