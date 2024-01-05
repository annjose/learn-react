import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';

export default function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='game' element={<Game />} />
      </Routes>
    </div>
  );

  // Reference article for navigation in React - https://www.codeconcisely.com/posts/react-navigation/

}
