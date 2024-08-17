import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const Card = () => {

  return (
    <Link to='/post'>
      <div className="flex flex-row-reverse overflow-hidden rounded-md shadow-lg ">
        <div>
          <img src="https://picsum.photos/200/250" alt="" className="h-full" />
        </div>
        <div className="p-3 bg-[#ffffff] hover:bg-[#e9e9e9] transition-all duration-300 text-black max-w-[70%]  ">
          <h1 className="text-xl font-semibold">Title</h1>

          <p className="font-light italic">Nov ,3 2024</p>

          <p>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>

          <div className="mt-1">
            <span className="text-blue-400 ">
              <a href="#">Read More...</a>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
