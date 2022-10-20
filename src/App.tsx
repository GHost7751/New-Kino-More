import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import MoviePage from './Page/MoviePage/MoviePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/MoviePage' element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
