import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './footer/Footer';
import Header from './header/Header';
import './index.css';
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
