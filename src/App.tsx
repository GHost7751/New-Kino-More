import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './Page/GamesPage/GamesPage';
import HomePage from './Page/HomePage/HomePage';
import MoviePage from './Page/MoviePage/MoviePage';
import SeriesPage from './Page/SeriesPage/SeriesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/MoviePage' element={<MoviePage />} />
          <Route path='/SeriesPage' element={<SeriesPage />} />
          <Route path='/GamesPage' element={<GamesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
