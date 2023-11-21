import axios from 'axios';
const API_KEY = '3286f85825625e7e7de93d878ce7cd80';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingAll = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

// export const
