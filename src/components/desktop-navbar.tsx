import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import '../styles/components/_navbar.scss';

// import images
import LogoLightMode from '../assets/logo-light-mode.png';

const DesktopNavbar: FunctionComponent = () => {

  return (
    <div className="sticky top-0 w-full bg-floral bg-opacity-60">
      <div className="flex flex-row justify-around place-items-center">
        <div className="p-2">
            <a href="#hero" className="scroll-smooth">
              <img className="h-[6.5rem] w-auto" src={LogoLightMode} alt="Ade Studio's logo" />
            </a>
        </div>
        <div className="p-4 pr-12">
          <nav>
            <ul className="flex flex-row justify-around place-items-center">
              <li className="py-4 px-6 cursor-pointer">
                <Link
                className="link"
                activeClass="active-desktop"
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <span className="font-text font-light	text-xl">About me</span>
                </Link>
              </li>
              <li className="py-4 px-6 cursor-pointer">
                <Link
                className="link"
                activeClass="active-desktop"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <span className="font-text font-light	text-xl">Skills</span>
                </Link>
              </li>
              <li className="py-4 px-6 cursor-pointer">
                <Link
                className="link"
                activeClass="active-desktop"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <span className="font-text font-light	text-xl">Projects</span>
                </Link>
              </li>
              <li className="py-4 px-6 cursor-pointer">
                <Link
                className="link"
                activeClass="active-desktop"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <span className="font-text font-light	text-xl">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <a href="/" className="scroll-smooth">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-[#2C2C2C]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
