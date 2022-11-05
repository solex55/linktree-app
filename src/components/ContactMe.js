import React from 'react';
import '../App.css';


function ContactMe() {
  return (
    <div className="flex flex-col w-full lg:w-4/5 mx-auto mt-8 px-6 text-xl font-inter">
      <header>
        <h1 className='text-4xl md:text-4xl lg:text-4xl font-semibold'>Contact Me</h1>
        <p className='my-3 text-xl'>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      <form action="" className='mt-2'>
        <div className='flex flex-col md:flex-row lg:flex-row gap-3 my-3 w-full justify-between'>
          <div className='flex flex-col w-full'>
            <label htmlFor="first_name" className='font-meduim text-gray-700'>First name</label>
            <input type="text" name="firstname" id="first_name" placeholder='Enter your first name' className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="last_name" className='font-meduim text-gray-700'>Last name</label>
            <input type="text" name="lastname" id="last_name" placeholder='Enter your last name' className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
          </div>
        </div>
        
        <div className='w-full my-3 flex flex-col'>
          <label htmlFor="email" className='font-meduim text-gray-700'>Email</label>
          <input type="email" name="email" id="email" placeholder='yourname@email.com' className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
        </div>
        
        <div className='w-full my-3 flex flex-col'>
          <label htmlFor="message" className='font-meduim text-gray-700'>Message</label>
          <textarea name="message" id="message" cols="30" rows="5" className='w-full block rounded-md  py-4 px-4 shadow-sm border-gray-300 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder="Send me a message and I'll reply you as soon as possible..." required/>
        </div>

        <div className='my-3'><input type="checkbox" className='w-4 h-4  border-blue-300 border-2 rounded-md  shadow checked:shadow-xl focus:ring-blue-200' name="checkbox" id="check" required /> <label for="check" className='font-normal text-base' name="checktext">You agree to providing your data to Zuri who may contact you.</label></div>
        
        <div>
          <button type='submit' className="btn text-2xl font-extralight bg-blue-600 hover:bg-blue-700 active:bg-blue-600 visited:bg-blue-200 gap-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="btn__submit"> 
            Send a Message
          </button>
        </div>
      </form>

    </div>

    

  )
}

export default ContactMe;