import React from 'react'
import { Typography } from '@material-tailwind/react'


const LatestArticle = () => {
  return (
    <div className='p-2 px-3 text-black dark:text-white'>
        <div className='mt-3'>
            <Typography 
            variant='h2'
            className='text-xl '
            >
                Latest Posts
            </Typography>

        </div>
        <div>
            <a href="">                
                <div className='w-full dark:hover:bg-gray-600 hover:bg-gray-200  flex gap-4 p-3 '>
                    <div className='rounded overflow-hidden'>
                        <img src="https://picsum.photos/100/100" alt="" className="w-16 h-16" />

                    </div>
                    <div className='flex flex-col justify-between'>
                        <Typography 
                        variant='h6'
                        className='mb-2'
                        >
                        Help children get better education
                        </Typography>

                        <Typography 
                        className='text-sm'
                        >
                            jun 21, 2020
                        </Typography>
                    </div>
                    
                </div>
            </a>
            
            
        </div>

        <div className=''>
        <Typography 
            variant='h2'
            className='text-xl '
            >
                Tags
            </Typography>
        </div>
        <div className='mt-4 p-3 flex gap-3'>
            
            <span className='p-1.5 rounded-md bg-blue-600'>
                <p>medical</p>
            </span>
            <span className='p-1.5 rounded-md bg-blue-600'>
                <p>lifestyle</p>

            </span>
            <span className='p-1.5 rounded-md bg-blue-600'>
                <p>medical</p>

            </span>
         

        </div>
    </div>
  )
}

export default LatestArticle