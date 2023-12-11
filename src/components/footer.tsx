import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {

  const pdfUrl = 'https://drive.google.com/file/d/1BrHRDuTNHZLRsv4ygVeLTiVVSo6xsXg5/view?usp=drive_link';

  const handleDownloadResume = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="pt-10 pb-28 md:pb-6 px-5 md:px-24 flex flex-col bg-floral dark:bg-dark-grey md:flex md:flex-row-reverse md:justify-between">
      <div className="flex flex-row justify-center items-center mb-10 md:w-1/3">
        {/* GitHub link */}
        <a className="h-14 mx-9 md:mx-5" href="https://github.com/AdeGow" target="_blank" rel="noreferrer">
          <svg className="object-contain" xmlns="http://www.w3.org/2000/svg" height="100%" width="auto" viewBox="0 0 496 512">
            <path className="fill-jet dark:fill-floral" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
          </svg>
        </a>
        {/* LinkedIn Link */}
        <a className="h-14 mx-9 md:mx-5" href="https://www.linkedin.com/in/adeline-degaulejac/?locale=en_US" target="_blank" rel="noreferrer">
          <svg className="object-contain" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="7.025 7.025 497.951 497.95"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stop-color="#2489be"/><stop offset="1" stop-color="#0575b3"/></linearGradient>
          <path className="fill-jet dark:fill-floral" d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"/>
          </svg>
        </a>
      </div>
      <div className="flex flex-row justify-center items-center mb-6 justify-center md:w-1/3">
        <p className="px-3 text-center font-text font-light text-jet text-lg dark:text-floral">Website created with React JS and Tailwind CSS with ♡</p>
      </div>
      <div className="md:flex md:flex-col md:w-1/3">
        <div className="flex flex-row justify-center items-center">
          {/* Malt icon */}
          <a className="px-3 h-14 w-full flex flex-row items-center" href="https://en.malt.es/profile/adelinedegaulejac1" target="_blank" rel="noreferrer">
            <svg className="flex-none w-8 h-8" xmlns="http://www.w3.org/2000/svg" aria-label="Malt" role="img" viewBox="0 0 512 512" width="auto" height="100%" rx="15%">
              <path className="fill-jet dark:fill-floral" d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"/>
            </svg>
            <p className="pl-2 flex-auto w-64 text-left font-text font-light text-jet text-lg dark:text-floral">find me on Malt platform</p>
          </a>
        </div>

        <div className="flex flex-row justify-center items-center">
          {/* Location icon */}
          <div className="px-3 h-14 w-full flex flex-row items-center">
            <svg className="flex-none w-8 h-8 stroke-jet dark:stroke-floral" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="pl-2 flex-auto w-64 text-left font-text font-light text-jet text-lg dark:text-floral">based in Barcelona, Spain</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          {/* Download icon */}
          <button className="px-3 h-14 w-full flex flex-row items-center" onClick={handleDownloadResume} >
            <svg className="flex-none w-7 h-7 stroke-jet dark:stroke-floral" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <p className="pl-2 flex-auto w-64 text-left font-text font-light text-jet text-lg dark:text-floral">download my resume in PDF</p>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Footer;
