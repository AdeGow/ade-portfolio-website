import React, { FunctionComponent } from 'react';
import ActiveBuddyProjectCard from './activebuddy-project-card';
import AlibyeProjectCard from './alibye-project-card';
import PokedexProjectCard from './pokedex-project-card';
import PaltaxProjectCard from './paltax';

const Projects: FunctionComponent = () => {

  return (
    <section id="projects">
      <div className="container mx-auto text-center md:text-left md:pl-7">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl mb-8 md:text-5xl md:mb-4">PROJECTS</h2>
      </div>
      <div className="md:grid xl:mx-32 md:grid-cols-2 md:gap-4 md:justify-between">
        <ActiveBuddyProjectCard />
        <AlibyeProjectCard />
        <PokedexProjectCard />
        <PaltaxProjectCard />
      </div>
    </section>
  );
}

export default Projects;
