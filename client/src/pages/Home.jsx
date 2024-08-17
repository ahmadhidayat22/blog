import React from 'react'
import { Navbar, Footer } from '../components'

const Home = () => {
  return (
    <div className='text-black'>
      <div>
        <Navbar />
      </div>
      <div className='h-svh'>

        <h1 className='text-red-500'>hello</h1>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home