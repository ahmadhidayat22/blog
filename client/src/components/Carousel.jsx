import React from 'react'
import Card from './Card';
import HeroCard from './HeroCard';

const Carousel = () => {
  return (
    <div className='container  mt-5 mx-auto mb-10'>
        <HeroCard />
        <div className="grid grid-cols-2  gap-3  my-3">

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
   

        </div>
        
    </div>
  )
}

export default Carousel