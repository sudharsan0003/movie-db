import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
