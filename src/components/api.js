import axios from 'axios';
const API_KEY = '3286f85825625e7e7de93d878ce7cd80';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingAll = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
export const getReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
export const getByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};
