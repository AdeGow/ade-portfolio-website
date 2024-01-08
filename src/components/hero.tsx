import React, { FunctionComponent } from 'react';

const Hero: FunctionComponent = () => {

  return (
    <section id="hero">
      <div className="bg-floral dark:bg-jet grid grid-row">
        <div className="container md:h-4/5 px-7 mx-auto text-left py-28 md:py-44 md:px-16">
          <div className="flex items-center">
            <div className="w-full">
              <h1 className="font-title font-semibold text-jet text-4xl sm:text-5xl mb-5 md:text-7xl dark:text-floral md:mb-4">ADELINE <br className="lg:hidden" />DE GAULEJAC</h1>
              <p className="font-text font-normal text-jet text-base mb-3 md:text-2xl dark:text-floral md:mb-10">Full-Stack web developer | UX/UI designer | Freelance</p>
              <p className="font-text font-light text-jet text-lg mb-3 md:text-2xl dark:text-floral md:mb-4">Looking for a detail-oriented web developer to turn your ideas into real user-friendly projects?
              </p>
              <p className="font-text font-light text-jet text-lg mb-3 md:text-2xl dark:text-floral md:mb-4">Welcome to Ade Studio ♡</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-dark-grey mb-24">
        <svg width="100%" height="auto" viewBox="0 0 1514 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFAF2" className="dark:fill-jet" d="M1514 67.9996V0H0.5C0.5 0 197 84.0013 484.5 84.0013C700.555 84.0013 1012.5 0.625977 1188.5 0.625977C1364.5 0.625977 1514 67.9996 1514 67.9996Z" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
