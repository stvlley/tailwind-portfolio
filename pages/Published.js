import React from 'react'
import Image from 'next/image'
import axios from "axios";
import { useState, useEffect } from 'react';


export default function Published() {

    const [blogs, setBlogs] = useState([])

    

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stephentalleyjr')
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data.items)
            })
            
    }, [])
    const image = blogs.map(blog =>  <img src={blog.thumbnail} width={300} height={300}/>)

    
    return (
        <div name='projects' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-green-400 mb-10'>Published </p>
              <p className='py-6'>Some of my latest blog posts</p>
          </div>
      

          <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
             
              <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              {image[1]}
              {/* <Image src="/nextjs-dark.svg" alt="HTML Logo" width={300} height={300} /> */}
                  <p className='my-4 text-2xl'>Sinatra or Rails: Ruby Backend Frameworks</p>
                  <p>By Stephen Talley</p>
                  <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-green-400 tracking-wider'>
                       Comparing the two Ruby frameworks
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/@stephentalleyjr/sinatra-or-rails-ruby-backend-frameworks-f73dace7d626?source=rss-59f5deef8ab8------2'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Article</button>
                            </a>
                            
                        </div>

                    </div>
              </div>
              <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              {image[0]}
              {/* <Image src="/nextjs-dark.svg" alt="HTML Logo" width={300} height={300} /> */}
                  <p className='my-4 text-2xl'>Google-Map-React: Quick Start Guide For Newbs</p>
                  <p>By Stephen Talley</p>
                  <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-1xl font-bold text-green-400 tracking-wider'>
                       Step-By-Step Guide on how to use the Google Maps API
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/@stephentalleyjr/google-map-react-quick-start-guide-for-newbs-d514a7a4ce0b?source=rss-59f5deef8ab8------2'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Article</button>
                            </a>
                            
                        </div>

                    </div>
              </div>
              <div className='group shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              {image[5]}
              {/* <Image src="/nextjs-dark.svg" alt="HTML Logo" width={300} height={300} /> */}
                  <p className='my-4 text-2xl'>Object-Oriented Design</p>
                <p>By Stephen Talley</p>
                  <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-green-400 tracking-wider'>
                       A novices' thought process on Object-Oriented Design
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/@stephentalleyjr/object-oriented-design-73f064babd85?source=rss-59f5deef8ab8------2'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Article</button>
                            </a>
                            
                        </div>

                    </div>
              </div>
           
            
              
          </div>
  
      </div>
    </div>
    )
}

