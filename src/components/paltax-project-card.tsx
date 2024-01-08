import React, { FunctionComponent } from 'react';
import PaltaxPicture from '../assets/paltax-logo.png';

const PaltaxProjectCard: FunctionComponent = () => {

  return (
    <div className="flex flex-col items-center mx-auto">
      {/* Card component */}
      <div className="transition-all duration-150 flex w-full px-5 md:px-4 lg:px-0 py-4 md:w-11/12">
        <div className="flex flex-col items-stretch pt-6 mb-6 transition-all duration-150 bg-white rounded-3xl shadow-lg hover:shadow-2xl lg:mx-4 dark:bg-jet  text-jet dark:text-floral">
          {/* Card Title */}
          <div className="w-full px-4 py-3 text-center font-title font-medium text-3xl md:text-3xl lg:5xl">
            <h3>PALTAX</h3>
          </div>
          {/* Card image */}
          <div className="md:flex-shrink-0 bg-[#FAFAFA]">
            <img className="object-contain w-full md:h-56" src={PaltaxPicture} alt="Active Buddy's logo" />
          </div>
          {/* Card description */}
          <div className="flex flex-row flex-wrap w-full h-26 px-4 py-4 text-base font-normal text-left lg:text-lg lg:h-56 lg:px-7">
            <p className="pb-4">Paltax is a web app project to create and manage recipes.</p>
            <p>Some of the features that Paltax will offer are:
            <br />
            ➡️ manually create or import recipes from websites
            <br />
            ➡️ plan recipes in your calendar
            <br />
            ➡️ generate shopping lists</p>
          </div>
          {/* Card tools */}
          <div className="flex flex-row flex-wrap w-full h-14 px-4 py-2 text-base font-light text-left lg:px-7">
            <p>Ruby on Rails and much more to come !</p>
          </div>
          {/* Card links */}
          <div className="px-4 py-4 h-18 bg-jet dark:bg-jet rounded-b-[24px]">
            {/* Work in progress message */}
            <div className="flex flex-row h-16 justify-around items-center mx-auto py-2 bg-jet dark:bg-jet">
              <p className="font-title text-floral">🚧 WORK IN PROGRESS 🚀</p>
            </div>
        </div>
      </div>
    </div>
  </div>
 );
}

export default PaltaxProjectCard;
