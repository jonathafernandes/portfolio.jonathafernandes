import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';
import './responsive.css';

import Header from './components/header';
import About from './pages/about';
import Home from './pages/home';
import Stack from './pages/stack';
import Projects from './pages/projects';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;