import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../../styles/components/_navbar.css';
import ThemeToggle from '../ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

import LogoBeigeBg from '../../assets/logo-ade-studio-grey.svg';
import LogoGreyBg from '../../assets/logo-ade-studio-floral.svg';

const DesktopNavbar: FunctionComponent = () => {

  const { theme } = useTheme();

  // change sticky desktop navbar opacity on scroll, working on light and dark modes
  const [isHeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `header ${isHeaderActive ? 'bg-opacity-60 dark:bg-opacity-60' : ''}`;

  return (
    <div className={`sticky top-0 w-full border-bottom backdrop-filter backdrop-blur-sm bg-floral dark:bg-jet ${headerClasses}`}>
      <div className="flex flex-row justify-around place-items-center">
        <div>
            <a href="#top" className="scroll-smooth">
              {theme === 'dark' ? (
              <img className="h-[5rem] w-auto" src={LogoGreyBg} alt="Ade Studio's logo" />
              ) : (
                <img className="h-[5rem] w-auto" src={LogoBeigeBg} alt="Ade Studio's logo" />
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
                offset={-150}
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
                offset={-150}
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
