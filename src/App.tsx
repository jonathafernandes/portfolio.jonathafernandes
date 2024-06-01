import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './global.css';

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;