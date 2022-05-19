import React from 'react'
import Image from 'next/image'

export default function Published() {

    const mediumToken = "29927c09263f063383c3f02469796edf9ecc4455a2e68e1fd538575c5897da2e5"

   


    return (
        <div name='projects' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-green-400 mb-10'>Published</p>
                    <p className='py-6'>Some of my latest blog posts</p>
                </div>


                <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>

                    <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src="/nextjs-dark.svg" alt="HTML Logo" width={300} height={300} />
                        <p className='my-4'>NextJS / MongoDB </p>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Digital Fashion House
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src="/nextjs-dark.svg" alt="HTML Logo" width={300} height={300} />
                        <p className='my-4'>HTML</p>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Console.S()uad
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src="/nextjs-dark.svg" alt="HTML Logo" width={300} height={300} />
                        <p className='my-4'>HTML</p>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                East Coast Fishing Co.
                            </span>
                            <p>Team project</p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

