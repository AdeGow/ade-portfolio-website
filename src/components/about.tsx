import React, { FunctionComponent } from 'react';
import { useTheme } from '../context/theme-context';
import beigeBgAdePicture from '../assets/beige-bg-ade-picture.gif';
import greyBgAdePicture from '../assets/grey-bg-ade-picture.gif';


const About: FunctionComponent = () => {

  const { theme } = useTheme();

  return (
    <section id="about-me" className="md:mb-14">
      <div className="container mx-auto text-center md:text-left md:px-14">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl mb-6 md:text-5xl md:mb-4">ABOUT ME</h2>
      </div>
      <div className="container mx-auto text-center md:text-left md:px-14">
        <div className="flex flex-col lg:flex-row-reverse md:items-center">
          <div>
            {theme === 'dark' ? (
              <img className="h-auto w-full mb-6 md:mb-0" src={greyBgAdePicture} alt="Adeline" />
              ) : (
              <img className="h-auto w-full mb-6 md:mb-0" src={beigeBgAdePicture} alt="Ade" />
            )}
          </div>
          <div className="font-text font-light text-jet text-lg text-left px-9 mb-16 dark:text-floral md:text-xl md:pl-0 md:mb-0">
            <p>Hey there, I’m Ade, a full-stack software developer and UX/UI designer.</p>
            <br />
            <p>Specialised in Ruby on Rails, I would be thrilled to engage in your web applications, e-commerce and website projects.</p>
            <br />
            <p>I have worked on Rails and React JS apps (check out my portfolio below 👇) and designed websites for people in the Hospitality sector during my experience at Amenitiz as Web Designer.</p>
            <br />
            <p>In addition to my keen interest for web development, I have a background in business and digital marketing. I speak English, Spanish and French and hopefully Portuguese or Italian soon !</p>
            <br />
            <p>In a nutshell, the goal here is to <span className="font-medium">bring your web projects to life</span> while respecting your vision, help you achieve your business goals and optimize the user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
