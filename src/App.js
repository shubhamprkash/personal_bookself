// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Bookshelf from './pages/Bookshelf';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
