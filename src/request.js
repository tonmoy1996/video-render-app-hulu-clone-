const api_key = 'fc7014241c98d33d045f0944410b7591';

export default {
  fetchTrending: `/trending/all/week?api_key=${api_key}& language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}& language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${api_key}& with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${api_key}& with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${api_key}& with_genres=27`,
  fetchRommanceMovies: `/discover/movie/?api_key=${api_key}& with_genres=10749`,
  fetchMystrey: `/discover/movie/?api_key=${api_key}& with_genres=9648`,
  fetchWestern: `/discover/movie/?api_key=${api_key}& with_genres=37`,
  fetchAnimation: `/discover/movie/?api_key=${api_key}& with_genres=16`,
  fetchScifi: `/discover/movie/?api_key=${api_key}& with_genres=874`,
};
