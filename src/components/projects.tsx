import React, { FunctionComponent } from 'react';
import ActiveBuddyProjectCard from './activebuddy-project-card';
import AlibyeProjectCard from './alibye-project-card';
import PokedexProjectCard from './pokedex-project-card';
import PaltaxProjectCard from './paltax';
import { useMediaQuery } from 'react-responsive';
import WaveGreyTopThreeLayers from './wave-grey-top-three-layers';
import WaveGreyBottomThreeLayers from './wave-grey-bottom-three-layers';
import WaveOrangeBottomThreeLayers from './wave-orange-bottom-three-layers';

const Projects: FunctionComponent = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id="projects">
      <div className="container mx-auto text-center md:text-left md:pl-7">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl mb-8 md:text-5xl md:mb-4">PROJECTS</h2>
      </div>
      <div className="rounded-xl bg-opacity-25 bg-gradient-to-b from-[#FF8B5C] via-[#FF8B5C] to-[#FF9D85] dark:from-[#2c2c2c] dark:via-[#525252] dark:to-transparent md:grid xl:mx-32 md:grid-cols-2 md:gap-4 md:justify-between dark:bg-jet">
        <ActiveBuddyProjectCard />
        <AlibyeProjectCard />
        <PokedexProjectCard />
        <PaltaxProjectCard />
      </div>
    </section>
  );
}

export default Projects;
