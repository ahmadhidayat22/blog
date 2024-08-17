import React, { useState, useEffect } from 'react';

import Card from './Card';
import HeroCard from './HeroCard';
import { api } from '../api';

const Carousel = () => {
  const [post , setPost] = useState([]);


  useEffect(() => {
    const getPost = async() => {
      await api.postAll()
      .then(res => {
        setPost(res)
        
      })
    }
    getPost()
  }, [])
  return (
    <div className='container  mt-5 mx-auto mb-10'>
        <HeroCard />
        <div className="grid grid-cols-2  gap-3  my-3">
        {post.map((e,i) => {
          return(
            <Card post={e}/>
          )
          
        })

        }
   

        </div>
        
    </div>
  )
}

export default Carousel