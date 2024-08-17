import React, { useState, useEffect } from 'react';

import { Navbar ,Footer } from '../components'

import { Input } from "@material-tailwind/react";
import useDarkSide from '../utils/useDarkSide';
import { useTheme } from '../utils/ThemeContext';


const Login = () => {
  const { theme } = useTheme();

  
  return (
    <div className="text-black">
      <div>
        <Navbar />
      </div>

      <div className="border rounded shadow-sm  mt-16 w-96 mx-auto">
        <div className="mx-auto mt-3 text-center ">
          <h1 className="text-2xl font-bold dark:text-white">Sign In</h1>
        </div>

        <div className="mt-6 px-3">
          <div className="w-full mt-3 dark:text-white">
            <Input 
            label="Username" 
            color={theme === 'dark' ? 'white' : 'black'}
            className="dark:text-white " 
            />
          </div>
          
          <div className="w-full mt-3 dark:text-white">
            <Input label="Password" 
            color={theme === 'dark' ? 'white' : 'black'}
            
            className="dark:text-white" />
          </div>
          
        </div>

        <div className='px-4 mt-3 dark:text-white text-end'>
          <a href="" className='text-sm font-light'>Forgot Password ?</a>
        </div>

        <div className="flex justify-center mt-4 px-4 mb-3">
          <button className="bg-blue-500 w-full text-white p-2 rounded-md">
            Sign In
          </button>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}

export default Login