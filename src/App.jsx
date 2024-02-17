import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Categories from './pages/Categories';
import Home from './pages/Home';

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <NavBar setSearchInput={setSearchInput} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
