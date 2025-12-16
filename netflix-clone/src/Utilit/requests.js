const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US&page=1`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=US`,
  fetchTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=27&with_watch_providers=8&watch_region=US`,
};
export default requests;

