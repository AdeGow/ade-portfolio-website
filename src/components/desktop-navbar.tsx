import React, { FunctionComponent } from 'react';

// import images
import LogoLight from './assets/logo-light-mode.png';
import LogoDark from './assets/logo-dark-mode.png';

const DesktopNavbar: FunctionComponent = () => {

  return (
    <div className="w-full bg-floral">
      <div className="mx-auto py-2 px-6 bg-floral opacity-60">
        <nav>
          <ul className="flex flex-row justify-around">
            <li className="p-4">
              <img src="../paltax.png" alt="Logo Ade Studio" />
            </li>
            <li className="p-4">
              <a href="#skills" className="scroll-smooth">About me</a>
            </li>
            <li className="p-4">
              <a href="#projects" className="scroll-smooth">Skills</a>
            </li>
            <li className="p-4">
              <a href="#contact" className="scroll-smooth">Projects</a>
            </li>
            <li className="p-4">
              <a href="#hero" className="scroll-smooth">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default DesktopNavbar;
