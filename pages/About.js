import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello! I'm Stephen Talley. This is my site. Please feel free to take a look around.</p>
            </div>
            <div>
              <p>I am a creative and passionate individual who strives to build impactful and beautifully designed applications and software. Even more so, I really just love building things that solve problems. I had the honor of learning to code at Flatiron School where i got to work in a team setting. I can not emphasize enough, the importance of being on a team. People and talent are the true gift of this world.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;