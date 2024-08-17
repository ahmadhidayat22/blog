import React from "react";
import { Typography } from "@material-tailwind/react";

const Post = ({ post }) => {
  console.log(post);

  return (
    <div className="p-2 flex flex-col gap-3 text-black dark:text-white">
      {post.map((item) => {
        return (
          <div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://picsum.photos/640/320"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="mt-3">
              {/* Category */}
              <Typography variant="h5" color="blue" className="uppercase">
                {item.category}
              </Typography>
            </div>
            <div>
              {/* Title */}

              <Typography variant="h3" className="">
                {item.title}
              </Typography>
            </div>
            <div className="mt-3">
              <Typography>
                {item.content}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
