import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const HeroCard = ({post}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
      setItem(post)
      console.log(item);    
    }, [post])
    return (
      <div>
        {item.length > 0 ?  (
          <div >
            <Link to={`/posts/${item[0].slug}`}>
              <div className='w-full h-72 relative overflow-hidden rounded'>
                <div className="relative">
                  <img src={"https://picsum.photos/1200/920"} alt="" className='w-full'/>
                </div>
                <div className='flex flex-col h-full ms-6 w-2/5 absolute text-black top-0 left-0 p-3 gap-2'>
                  <div>
                    <h1 className='text-3xl font-semibold'>{item[0].title}</h1>
                  </div>
                  <div>
                    <p className='line-clamp-4'>{item[0].content}</p>
                  </div>
                  <div className='mt-2'>
                    <span className='bg-blue-600 rounded-sm p-1.5 text-white'>
                      <a href={`/posts/${item[0].slug}`}>Read More</a>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    )
}

export default HeroCard