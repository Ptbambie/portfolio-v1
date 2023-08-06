import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Graphisme from './pages/Graphisme';
import Dev from './pages/Dev';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/siteWeb" element={<Dev/>} />
         <Route path="/graphisme" element={<Graphisme/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
