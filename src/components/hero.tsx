import React, { FunctionComponent } from 'react';

const Hero: FunctionComponent = () => {

  return (
    <section id="hero">
      <div className="bg-floral dark:bg-jet grid grid-flow-row auto-rows-max md:auto-rows-min md:h-4/5	">
        <div className="container mx-auto text-left mt-32 md:mt-44 px-7">
          <div className="flex items-center">
            <div className="w-full">
              <h1 className="font-title font-semibold text-jet text-5xl mb-5 md:text-8xl dark:text-floral md:mb-4">ADELINE <br className="md:hidden" />DE GAULEJAC</h1>
              <p className="font-text font-normal text-jet text-base mb-3 md:text-2xl dark:text-floral md:mb-10">Full-Stack developer | Web designer | Freelance</p>
              <p className="font-text font-light text-jet text-lg mb-3 md:text-2xl dark:text-floral md:mb-4">Looking for a detail-oriented web developer to turn your ideas into real user-friendly projects?
                <br />
                Welcome to Ade Studio. ♡
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-44 bg-floral dark:bg-jet md:hidden">
      </div>
        <svg viewBox="0 0 500 125">
          <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#FFFAF2" className="dark:fill-jet"></path>
        </svg>
    </section>
  );
}

export default Hero;
