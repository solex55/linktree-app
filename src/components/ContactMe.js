import React from 'react';
import '../App.css';


function ContactMe() {
  return (
    <div className="flex flex-col w-full mx-auto mt-8 px-6 text-xl">
      <header>
        <h1 className='text-xl md:text-3xl lg:text-3xl font-bold'>Contact Me</h1>
        <p className='my-3 text-xl'>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      <form action="" className='mt-2'>
        <div className='flex flex-col md:flex-row lg:flex-row gap-3 my-3 w-full justify-between'>
          <div className='flex flex-col w-full'>
            <label htmlFor="first_name">First name</label>
            <input type="text" name="" id="first_name" placeholder='Enter your first name' className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="last_name">Last name</label>
            <input type="text" name="" id="last_name" placeholder='Enter your last name' className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
          </div>
        </div>
        
        <div className='w-full my-3 flex flex-col'>
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" placeholder='yourname@email.com' className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
        </div>
        
        <div className='w-full my-3 flex flex-col'>
          <label htmlFor="message">Message</label>
          <textarea name="" id="message" cols="30" rows="5" className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder="Send me a message and I'll reply you as soon as possible..." required/>
        </div>

        <div className='my-3'><input type="checkbox" className='w-4 h-4 appearance-none border-blue-300 border-2 rounded-md  shadow checked:shadow-xl text-purple-500 focus:ring-blue-200' name="" id="check" required /> <label for="check" >You agree to providing your data to Zuri who may contact you.</label></div>
        
        <div>
          <button type='submit' className="btn"> 
            Send a Message
          </button>
        </div>
      </form>

    </div>

    

  )
}

export default ContactMe;