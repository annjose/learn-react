import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import MovieMosaic from './pages/MovieMosaic';
import AsciinemaDemo from './pages/AsciinemaDemo'
import HelixTutor from './pages/helix-tutor'

export default function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='game' element={<Game />} />
        <Route path='movie-mosaic' element={<MovieMosaic />} />
        <Route path='asciinema-demo' element={<AsciinemaDemo />} />
        <Route path='helix-tutor' element={<HelixTutor />} />
      </Routes>
    </div>
  );

  // Reference article for navigation in React - https://www.codeconcisely.com/posts/react-navigation/

}
