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

// import images
import paltax from './assets/paltax.png';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <section id="hero">
        <Hero />
      </section>
      <img src={paltax} alt="Logo Ade Studio" />
      <section id="about-me">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
