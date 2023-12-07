import React from 'react';
import { useTheme } from '../context/theme-context';
import '../styles/components/_theme-toggle.scss';

const lightModeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-6 h-6 pl-1 stroke-jet dark:stroke-floral" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
`;

const darkModeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-6 h-6 stroke-jet dark:stroke-floral" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  return (
    <button className="dark-mode-toggle w-16 h-8 rounded-full border-2 border-jet dark:border-floral flex items-center" onClick={handleToggle}>
      {theme === 'dark' ? (
        <div className="w-full flex flex-row justify-between"><span className="basis-1/2" dangerouslySetInnerHTML={{ __html: lightModeIcon }} /><span  className="basis-1/2"></span></div>
      ) : (
        <div className="w-full flex flex-row-reverse"><span className=""></span><span className="pr-1" dangerouslySetInnerHTML={{ __html: darkModeIcon }} /></div>
      )}
    </button>
  );
};

export default ThemeToggle;
