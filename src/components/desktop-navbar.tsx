import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import '../styles/components/_navbar.scss';
import ThemeToggle from './theme-toggle';
import { useTheme } from '../context/theme-context';

// import images
import LogoLightMode from '../assets/logo-light-mode.png';
import LogoDarkMode from '../assets/logo-dark-mode.png';

const DesktopNavbar: FunctionComponent = () => {

  const { theme } = useTheme();

  return (
    <div className="sticky top-0 w-full bg-floral dark:bg-jet bg-opacity-60 dark:bg-opacity-90">
      <div className="flex flex-row justify-around place-items-center">
        <div className="p-2">
            <a href="#hero" className="scroll-smooth">
              {theme === 'dark' ? (
              <img className="h-[6.5rem] w-auto" src={LogoLightMode} alt="Ade Studio's logo" />
              ) : (
                <img className="h-[6.5rem] w-auto" src={LogoDarkMode} alt="Ade Studio's logo" />
              )}
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
                  <span className="font-text dark:text-floral font-light	text-xl">About me</span>
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
                  <span className="font-text dark:text-floral font-light	text-xl">Skills</span>
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
                  <span className="font-text dark:text-floral font-light	text-xl">Projects</span>
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
                  <span className="font-text dark:text-floral font-light	text-xl">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
