import React from 'react';
import './App.css';
import Hero from './pages/hero/Hero';
import AboutMe from './pages/about-me/AboutMe'
import Skills from './pages/skills/Skills';
import Portfolio from './pages/portfolio/Portfolio';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
