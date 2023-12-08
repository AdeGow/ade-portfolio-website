import React, { FunctionComponent } from 'react';
import paltax from '../assets/paltax.png';

const Projects: FunctionComponent = () => {

  return (
    <section id="projects">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="font-title font-bold text-coral bg-gradient-to-b from-[#FF7D41] via-[#FF8B5C] to-[#FF9D85] inline-block text-transparent bg-clip-text text-4xl mb-8 md:text-5xl md:mb-4">PROJECTS</h2>
      </div>      <img src={paltax} alt="Logo Ade Studio" />
      <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit tincidunt vehicula dapibus facilisi vestibulum, habitant in blandit etiam himenaeos. Phasellus per morbi mauris non pulvinar vestibulum varius class molestie, arcu torquent odio pharetra sollicitudin aliquam est aenean augue, in rhoncus integer aptent habitasse inceptos senectus himenaeos. Netus cursus feugiat nunc mus ut pretium laoreet, mattis leo sem curae vel vehicula, justo montes mollis hac viverra mi.

      Ligula habitasse facilisis venenatis nascetur pharetra consequat eleifend quis lacinia, mattis tristique vestibulum urna curae conubia tortor class nulla vehicula, non leo augue montes cubilia justo est ornare. Hendrerit cum sagittis quisque magnis mi risus vehicula porttitor cursus, egestas libero iaculis auctor vivamus potenti leo aliquam, enim platea est commodo interdum tellus condimentum class. Etiam maecenas turpis fusce arcu ultrices massa pharetra felis at porta, platea ac fringilla commodo dictum posuere netus eu mattis luctus suspendisse, donec fames fermentum litora tristique tempor facilisi convallis rhoncus.</p>
    </section>
  );
}

export default Projects;
