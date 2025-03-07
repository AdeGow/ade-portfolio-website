import React, { FunctionComponent } from 'react';
import '../styles/components/about.css';
import AdelinePicture from '../assets/adeline-picture.jpg';

const About: FunctionComponent = () => {

  return (
    <section id="about-me" className="md:mb-14">
      <div className="container mx-auto text-center md:text-left md:px-14">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl mb-6 md:text-5xl md:mb-4">ABOUT ME</h2>
      </div>
      <div className="container mx-auto text-center md:text-left md:px-14">
        <div className="flex flex-col lg:flex-row-reverse md:items-center">
          <div className="image-effect-wrap md:w-1/3">
            <div className="image-effect-circle my-6">
              <img src={AdelinePicture} alt="Adeline" />
            </div>
          </div>
          <div className="font-text font-light text-jet text-lg text-left px-9 mb-16 dark:text-floral md:text-xl md:pl-0 md:mb-0 lg:w-2/3">
            <p>Currently working as Frontend Developer and UX/UI Designer, I bring over three years of experience in digital marketing and business before discovering my passion for web development. </p>
            <br />
            <p>I specialize in Next.js, React.js, TypeScript, and Figma, delivering end-to-end solutions from prototyping to testing and deployment. I also have experience as a Fullstack Developer, building Ruby on Rails apps.</p>
            <br />
            <p>Detail-oriented and team-spirited, I work following Agile methodologies and Lean principles to ensure efficiency and adaptability in every project.</p>
            <br />
            <p>Whether you're building a web app, e-commerce platform or website for your non-profit, company or personal project, I can help turn your ideas into user-friendly applications tailored to your needs.</p>
            <br />
            <p>Feel free to reach out (in English, French or Spanish)!</p>
            <p>I'd love to collaborate on impactful projects starting in April 2025 (negotiable).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
