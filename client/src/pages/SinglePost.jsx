import React from 'react'
import { Navbar, Breadcumbs, Post, Footer } from '../components'

const SinglePost = () => {
  return (
    <div>
        <div>
            <Navbar />
            <Breadcumbs />
        </div>
        <div className='w-full'>
          <div className=' w-3/5 mx-32'>
            <Post />

          </div>
          
        </div>
        <div className='mt-20'>

          <Footer />
        </div>
    </div>
  )
}

export default SinglePost