import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import '../../styles/components/_navbar.css';
import ThemeToggle from '../ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

import LogoBeigeBg from '../../assets/logo-ade-studio-grey.svg';
import LogoGreyBg from '../../assets/logo-ade-studio-floral.svg';

const MobileNavbar: FunctionComponent = () => {

  const { theme } = useTheme();

  return (
    <div id="top-mobile">
      <div className="top-0 w-full bg-floral dark:bg-jet">
        <div className="flex flex-row justify-between place-items-center">
          <div>
            {theme === 'dark' ? (
            <img className="h-[5rem] pl-1 w-auto" src={LogoGreyBg} alt="Ade Studio's logo" />
            ) : (
              <img className="h-[5rem] pl-1 w-auto" src={LogoBeigeBg} alt="Ade Studio's logo" />
            )}
          </div>
          <div className="pr-3">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div id="fixed-mobile-navbar" className="z-50 fixed bottom-4 w-full px-5">
        <div className="mx-auto py-2 px-6 bg-floral dark:bg-jet rounded-full shadow-[0_3px_7px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_3px_7px_1px_rgba(0,0,0,0.4)]">
          <nav>
            <ul className="flex flex-row justify-around">
              <li className="p-4">
                  <Link
                className="link"
                activeClass="active-mobile"
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-jet dark:stroke-floral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </Link>
              </li>
              <li className="p-4">
                <Link
                className="link"
                activeClass="active-mobile"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-jet dark:stroke-floral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </Link>
              </li>
              <li className="p-4">
                <Link
                className="link"
                activeClass="active-mobile"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-jet dark:stroke-floral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </Link>
              </li>
              <li className="p-4">
                <Link
                className="link"
                activeClass="active-mobile"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-jet dark:stroke-floral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </Link>
              </li>
              <li className="p-4">
                <Link
                className="link"
                activeClass="active-mobile"
                to="top-mobile"
                spy={false}
                smooth={true}
                offset={0}
                duration={750}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-jet dark:stroke-floral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
