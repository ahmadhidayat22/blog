import React, { useState, useEffect } from 'react';

import { Navbar , Carousel ,Footer} from '../components'

import { api } from '../api';

const Posts = () => {
  

  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <Carousel />
        </div>
        <Footer />
    </div>
  )
}

export default Posts