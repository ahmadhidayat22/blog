import React from 'react'
import { Typography } from "@material-tailwind/react";

const Post = () => {
  return (
    <div className='p-2 flex flex-col gap-3'>
        <div className='rounded-xl overflow-hidden'>
            <img src="https://picsum.photos/640/320" alt="" className="h-full w-full" />
        </div>
        <div>
            {/* Category */}
            <Typography 
            variant="h1" color="green"
            >EDUCATION</Typography>
        </div>
        <div>
            {/* Title */}

            <Typography
            variant='h2'
                      
            className='text-2xl'>Help children get better education</Typography>
        </div>
        <div className='mt-3'>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores deleniti quasi natus magnam nihil eveniet commodi repudiandae optio a perspiciatis, necessitatibus eaque debitis, reprehenderit, quisquam iusto deserunt officiis omnis?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aut quos, deserunt optio cum itaque ut asperiores tempora a hic dicta porro odio ad reprehenderit similique, enim fugiat doloribus fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad nulla animi atque laudantium quibusdam reiciendis, at repellendus facere a voluptas consequuntur dolor odit amet beatae perspiciatis quaerat sunt maiores eligendi? Fugiat, facilis quidem reiciendis, unde praesentium inventore ea ipsam officia, rerum quae alias quisquam magni blanditiis consequuntur ab eos. Maiores nisi alias ea tenetur! Nulla sed assumenda illo similique nam dolorum, provident dignissimos fuga beatae labore iusto, quae asperiores in aspernatur at non! Quia voluptatem dolore, officia molestiae blanditiis fugiat ut voluptates ratione repellat rerum excepturi amet similique sit quaerat, non voluptatibus autem fuga distinctio delectus. Sunt, est tempore.
            </Typography>
           
        </div>
        
    </div>
  )
}

export default Post