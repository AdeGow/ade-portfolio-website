import React, { FunctionComponent } from 'react';
import ActiveBuddyProjectCard from './ActiveBuddyProjectCard';
import AlibyeProjectCard from './AlibyeProjectCard';
import PokedexProjectCard from './PokedexProjectCard';
import PaltaxProjectCard from './PaltaxProjectCard';
import { useMediaQuery } from 'react-responsive';
import WaveBottomThreeLayers from '../AnimatedWaves/WaveBottomThreeLayers';
import WaveTopThreeLayers from '../AnimatedWaves/WaveTopThreeLayers';

const Projects: FunctionComponent = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id="projects">
      <div className="container mx-auto text-center md:text-left md:px-14">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl md:mb-8 md:text-5xl md:mb-4">PROJECTS</h2>
      </div>
      {isMobile ? (
        <div>
        <WaveTopThreeLayers />
          <div className="bg-opacity-25 bg-gradient-to-b from-[#FF7D41] via-[#FFFEFE] to-[#FF7D41] dark:bg-gradient-to-b dark:from-[#1F1F1F] dark:via-[#0A0A0A] dark:to-[#1F1F1F] md:grid xl:mx-32 md:grid-cols-2 md:gap-4 md:justify-between dark:bg-jet">
            <ActiveBuddyProjectCard />
            <AlibyeProjectCard />
            <PokedexProjectCard />
            <PaltaxProjectCard />
          </div>
          <WaveBottomThreeLayers />
        </div>
      ) : (
        <div className="bg-opacity-25 bg-gradient-to-b from-[#FFFEFE] via-[#FF8B5C] to-[#FFFEFE] dark:bg-gradient-to-b dark:from-[#1F1F1F] dark:via-[#5C5C5C] dark:to-[#1F1F1F] ">
          <div className="md:grid xl:mx-32 md:grid-cols-2 md:gap-4 md:justify-between">
            <ActiveBuddyProjectCard />
            <AlibyeProjectCard />
            <PokedexProjectCard />
            <PaltaxProjectCard />
          </div>
        </div>
        )}
    </section>
  );
}

export default Projects;
