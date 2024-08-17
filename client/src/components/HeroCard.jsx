import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const HeroCard = () => {
  return (
    <Link to="/posts/post" >

    <div className='w-full h-72 relative overflow-hidden rounded'>
        <div className="relative">
            <img src="https://picsum.photos/1200/920" alt="" className='w-max'/>

        </div>
        <div className='flex flex-col   h-full ms-6 w-2/5 absolute text-black top-0 left-0 p-3 gap-2'>
            <div>
                <h1 className='text-3xl font-semibold'>Title of a longer featured blog post</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi pariatur doloremque incidunt rerum modi ad explicabo! Voluptatibus error officiis ea qui beatae omnis animi harum totam provident. Molestias, quam.</p>
            </div>
            <div className='mt-2'>
                <span className='bg-blue-600 rounded-sm p-1.5 text-white '>
                    <a href="#">Read More</a>

                </span>
            </div>
        </div>
    </div>
    </Link>

)
}

export default HeroCard