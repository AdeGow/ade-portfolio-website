import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MobileNavbar from './components/Navigation/MobileNavbar';
import DesktopNavbar from './components/Navigation/DesktopNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="bg-white dark:bg-dark-grey">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
