import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import request from './request';
function App() {
  const [selectOption, setSelectOption] = useState(request.fetchTrending);
  return (
    <div className='app'>
      <Header />
      <Navbar setSelectOption={setSelectOption} />
      <MovieList selectOption={selectOption}  setSelectOption={setSelectOption}/>
    </div>
  );
}

export default App;
