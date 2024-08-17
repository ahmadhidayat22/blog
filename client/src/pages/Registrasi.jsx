import React from "react";
import { Navbar, Footer } from "../components";
import { Input } from "@material-tailwind/react";
import { useTheme } from '../utils/ThemeContext';

const Registrasi = () => {
  const { theme } = useTheme();



  return (
    <div className="text-black">
      <div>
        <Navbar />
      </div>

      <div className="border rounded shadow-sm  mt-16 w-96 mx-auto">
        <div className="mx-auto mt-3 text-center ">
          <h1 className="text-2xl font-bold dark:text-white">Sign Up</h1>
        </div>

        <div className="mt-6 px-3">
          <div className="w-full mt-3 dark:text-white">
            <Input label="Username" color={theme === 'dark' ? 'white' : 'black'}  className="dark:text-white" />
          </div>
          <div className="w-full mt-3 dark:text-white">
            <Input label="Email" color={theme === 'dark' ? 'white' : 'black'} className="dark:text-white" />
          </div>
          <div className="w-full mt-3 dark:text-white">
            <Input label="Password" color={theme === 'dark' ? 'white' : 'black'} className="dark:text-white" />
          </div>
          <div className="w-full mt-3 dark:text-white">
            <Input label="Confirm Password" color={theme === 'dark' ? 'white' : 'black'} className="dark:text-white" />
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-3">
          <button className="bg-blue-500  text-white p-2 rounded-md">
            Create Account
          </button>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Registrasi;
