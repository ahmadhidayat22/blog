import React, { useEffect, useState } from 'react'
import { Navbar, Breadcumbs, Post, Footer, LatestArticle } from '../components'
import { useParams } from 'react-router-dom';
import { api } from '../api';


const SinglePost = () => {
  const { slug } = useParams();
  const [post , setPost] = useState([]);

  useEffect(() => {
    const getOnePost = async() => {
      await api.singlePost(slug)
      .then(res => {
        setPost(res)
        
      })
    }
    getOnePost()
  }, [])


  return (
    <div>
        <div>
            <Navbar />
            <div className='ms-32 mt-3'>
              <Breadcumbs />

            </div>
        </div>
        <div className='w-full mx-auto  justify-center flex gap-4'>
          <div className='w-3/6'>
            <Post post={post}/>

          </div>
          <div className='dark:bg-[#3b3b3b] bg-[#fff] w-[30%] h-max rounded shadow-md '>
            <LatestArticle />
          </div>
          
        </div>
        <div className='mt-20'>

          <Footer />
        </div>
    </div>
  )
}

export default SinglePost