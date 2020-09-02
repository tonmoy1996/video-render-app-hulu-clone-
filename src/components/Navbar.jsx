import React from 'react';
import '../css/nav.css';
import request from '../request';
function Navbar({ setSelectOption }) {
  return (
    <div className='nav'>
      <h2 onClick={() => setSelectOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectOption(request.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setSelectOption(request.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => setSelectOption(request.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setSelectOption(request.fetchRommanceMovies)}>
        Rommance
      </h2>
      <h2 onClick={() => setSelectOption(request.fetchMystrey)}>Mystery</h2>
      <h2 onClick={() => setSelectOption(request.fetchScifi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectOption(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectOption(request.fetchAnimation)}>Animation</h2>
      <h2>Movie</h2>
    </div>
  );
}

export default Navbar;
