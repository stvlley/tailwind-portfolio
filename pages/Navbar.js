import React, { useState } from 'react'
import Logo from '/Users/stvlley/tailwind-portfolio-2/public/st2.svg'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

// Navbar
export default function Navbar() {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)
  
  return (
    <div className='text-gray-300 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
        {/* Logo */}
        <div>
        <Image src={Logo} alt="Stephen Talley Logo" width={100} height={75} />
        </div>

        {/* Menu */}
        <ul className='font-helvetica hidden md:flex'>
            <a href='/'> 
              <li>Home</li>
            </a>
            <a href='/about'> 
              <li>About</li>
            </a>
            <a href='/skills'> 
              <li>Skills</li>
            </a>
            <a href='/work'> 
              <li>Work</li>
            </a>
            <a href='/published'> 
              <li>Published</li>
            </a>
            <li>Contact</li>
        </ul>
        {/* Hamburger */}
        <div className='md:hidden z-10' onClick={handleClick}>
            {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : ' font-dosis absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Published</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/stephen-talley-the-developer/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/stvlley'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
