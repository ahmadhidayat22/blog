const Posts = require("../models/Posts");



const posts = async(req, res, next) => {
    try{

        const findPosts = await Posts.find();

        res.status(200).json({
            message: 'posts found',
            data: findPosts
        })
    }catch(err){
        console.log(err);
        
    }
}


module.exports = posts
