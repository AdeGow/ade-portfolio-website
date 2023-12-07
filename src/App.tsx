import React from 'react';
import { useMediaQuery } from 'react-responsive';

// import components
import MobileNavbar from "./components/mobile-navbar";
import DesktopNavbar from "./components/desktop-navbar";
import Hero from './components/hero';
import About from "./components/about";
import Skills from "./components/skills";
import Projects from './components/projects';
import Contact from './components/contact';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;