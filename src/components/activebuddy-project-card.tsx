import React, { FunctionComponent } from 'react';
import ActiveBuddyPicture from '../assets/kitesurf-2.jpg';

const ActiveBuddyProjectCard: FunctionComponent = () => {

  return (
    <div className="flex flex-row flex-wrap mx-auto">
      {/* Card component */}
      <div className="transition-all duration-150 flex w-full px-5 md:px-12 py-4 md:w-11/12">
        <div className="flex flex-col items-stretch pt-6 mb-6 transition-all duration-150 bg-white rounded-3xl shadow-lg hover:shadow-2xl lg:mx-4 dark:bg-jet text-jet dark:text-floral">
          {/* Card Title */}
          <div className="w-full px-4 py-3 text-center font-title font-medium text-3xl md:text-3xl lg:5xl">
            <h3>ACTIVE BUDDY</h3>
          </div>
          {/* Card image */}
          <div className="md:flex-shrink-0">
            <img className="object-cover w-full md:h-56" src={ActiveBuddyPicture} alt="Active Buddy's logo" />
          </div>
          {/* Card description */}
          <div className="flex flex-row flex-wrap w-full h-26 px-4 py-4 text-base font-normal text-left lg:text-lg lg:h-28 lg:px-6">
            <p>A mobile web app targeting sports enthusiasts seeking training buddies and activities.</p>
          </div>
          {/* Card tools */}
          <div className="flex flex-row flex-wrap w-full h-14 px-4 py-2 text-base font-light text-left lg:px-6">
            <p>Ruby on Rails | JavaScript | HTML | SCSS | Mapbox API</p>
          </div>
          {/* Card links */}
          <div className="px-4 py-4 h-18">
            {/* GitHub link */}
            <div className="flex flex-row h-16 justify-around items-center mx-auto px-12 py-2">
              <div className="flex items-center h-full mx-4">
                <a className="h-12" href="https://github.com/giacdc/rails-active-buddy" target="_blank" rel="noreferrer">
                <svg className="object-contain" xmlns="http://www.w3.org/2000/svg" height="100%" width="auto" viewBox="0 0 496 512">
                  <path className="fill-jet dark:fill-floral" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
                </a>
              </div>
              {/* Website link */}
              <div className="flex items-center h-full mx-4">
                <a className="h-12" href="https://www.activebuddy.pro/" target="_blank" rel="noreferrer">
                  <svg className="object-contain" fill="#000000" width="auto" height="100%" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-jet dark:fill-floral" d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 38.4062 17.1016 C 41.3124 19.9844 41.0546 23.5469 37.7030 26.875 L 33.6718 30.9297 C 33.9999 29.8047 33.9765 28.4922 33.6014 27.6016 L 35.9687 25.2344 C 38.2655 22.9844 38.5234 20.6172 36.6952 18.8125 C 34.8905 17.0313 32.5234 17.3125 30.2733 19.5625 L 26.9218 22.8672 C 24.6014 25.2109 24.2968 27.6016 26.1249 29.3828 C 26.6640 29.9453 27.4609 30.2969 28.4921 30.4844 C 28.1405 31.2344 27.4140 32.1016 26.7343 32.5703 C 26.0312 32.4531 25.1405 31.8906 24.3905 31.1172 C 21.4843 28.2344 21.7890 24.625 25.1874 21.2031 L 28.6093 17.8047 C 31.9609 14.4531 35.5234 14.2187 38.4062 17.1016 Z M 16.7499 38.7578 C 13.8436 35.875 14.1014 32.3125 17.4765 28.9844 L 21.5077 24.9297 C 21.1562 26.0547 21.1796 27.3672 21.5546 28.2578 L 19.1874 30.625 C 16.8905 32.8516 16.6327 35.2422 18.4609 37.0469 C 20.2655 38.8281 22.6562 38.5469 24.8827 36.2969 L 28.2343 32.9922 C 30.5546 30.6484 30.8593 28.2578 29.0312 26.4766 C 28.4921 25.9140 27.6952 25.5625 26.6640 25.375 C 27.0155 24.625 27.7421 23.7578 28.4218 23.2891 C 29.1249 23.4062 30.0155 23.9687 30.7890 24.7422 C 33.6718 27.625 33.3671 31.2109 29.9687 34.6328 L 26.5468 38.0547 C 23.1952 41.4063 19.6327 41.6406 16.7499 38.7578 Z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
 );
}

export default ActiveBuddyProjectCard;
