import React from 'react'
import Pants from '../public/Pants.jpeg'
import Image from 'next/image'

export default function Projects() {
  return (
    //   text
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold  inline border-b-4 text-gray-300 border-green-400'>Work</p>
                <p className='py-6'>Some of my latest projects</p>
            </div>
            {/* Projects Cards */}

            <div  style={{ backgroundImage: `url(${Pants})` }}
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}

                    <div>
                        <span>
                        <Image src="/st.svg" alt="Vercel Logo" width={200} height={200} />
                            
                        </span>
                        <div>
                            <a href='/'>
                                <button></button>
                            </a>
                            <a href='/'>
                                <button></button>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
