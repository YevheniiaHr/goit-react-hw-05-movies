import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Layout from './Layout/Layout';
import MoviesDetails from './pages/MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
