import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({post}) => {
  
  return (
    <Link to={`/posts/${post.slug}`}>
      <div className="flex overflow-hidden rounded-md shadow-lg  ">
        
        <div className="p-3 bg-[#ffffff] hover:bg-[#e9e9e9] transition-all duration-300 text-black max-w-[70%]  dark:text-white dark:bg-gray-700 dark:hover:bg-[#8a8e94] w-full">
          <h1 className="text-xl font-semibold">{post.title}</h1>

          <p className="font-light italic">Nov ,3 2024</p>

          <p className="line-clamp-2">{post.content}</p>

          <div className="mt-1">
            <span className="text-blue-400 ">
              <a href="#">Read More...</a>
            </span>
          </div>
        </div>

        
        <div>
          <img src="https://picsum.photos/200/250" alt="" className="h-full" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
