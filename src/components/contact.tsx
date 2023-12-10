import React, { FunctionComponent } from 'react';

const Contact: FunctionComponent = () => {

  return (
    <section id="contact" className="bg-floral dark:bg-jet">
      <div className="w-full bg-floral dark:bg-jet">
        <svg viewBox="0 0 500 125">
          <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="white" className="dark:fill-dark-grey"></path>
        </svg>
      </div>
      <div className="container mx-auto text-center md:text-left">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl mb-8 md:text-5xl md:mb-4">A PROJECT IN MIND?</h2>
      </div>
      <div className="container mx-auto text-center md:text-left">
        <p className="font-text font-light text-jet text-lg text-left px-7 mb-16 dark:text-floral md:text-2xl md:pl-0 md:mb-0">
          Let’s talk about your ideas and how we could work together. Feel free to ask me any question or request a quotation.
        </p>
      </div>
      <div className="w-full bg-white dark:bg-dark-grey">
        <svg viewBox="0 0 500 125">
          <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#FFFAF2" className="dark:fill-jet"></path>
        </svg>
      </div>
      <div className="bg-plant h-96">

      </div>
    </section>
  );
}

export default Contact;
