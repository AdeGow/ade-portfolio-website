import React, { FunctionComponent } from 'react';
import ContactForm from './ContactForm';

const Contact: FunctionComponent = () => {

  return (
    <section id="contact" className="bg-floral dark:bg-jet">
      <div className="w-full bg-white dark:bg-dark-grey">
        <svg width="100%" height="auto" viewBox="0 0 1514 68" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFAF2" className="dark:fill-jet" d="M0 68.0011L-5.94471e-06 0.00153612C-5.94471e-06 0.00153612 237 68.0011 413 68.0011C589 68.0011 938.445 0.00155326 1154.5 0.00153438C1370.56 0.00151549 1513.5 68.001 1513.5 68.001L413 68.0011L0 68.0011Z" />
        </svg>
      </div>
      <div className="container md:px-14 pt-10 md:pt-20 mx-auto text-center md:text-left">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl mb-8 md:text-5xl md:mb-8">A PROJECT IN MIND?</h2>
      </div>
      <div className="container md:px-14 mx-auto text-center md:text-left">
        <p className="font-text font-light text-jet text-lg text-left px-7 md:text-xl md:px-0 mb-8 dark:text-floral md:text-2xl md:mb-12">
          Let’s talk about your ideas and how we could work together. <br /> Feel free to contact me in English, Spanish or French to ask me more information or request a quotation.
        </p>
      </div>
      <div className="min-h-screen bg-plant bg-auto">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
