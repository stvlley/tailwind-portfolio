import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5a5684bd-7fac-46f2-937c-64325765e7ed" className='rounded flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='rounded-lg text-4xl font-bold inline border-b-4 border-green-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>If you can not get a hold of me. You are not trying.</p>
            </div>
            <input className='rounded bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='rounded my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='rounded bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='rounded text-white border-2 hover:bg-green-400 hover:border-green-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact