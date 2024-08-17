const mongoose = require('mongoose');

const Posts = new mongoose.Schema({
    title : {
        type : String,
        required : true,   
    },
    slug : {
        type : String,
        required: true,
        unique: true,
        lowercase: true
    },
    user_id : {
        type: 'number',
        required: true
    },
    content : {
        type: String,
        required: true,
    },
    comments : [{
        user_id :"number",
        content : String,
        createdAt : {
            type: Date,
            default: Date.now
        }
    }],
    publishedDate : {
        require: true,
        type: Date
    }   
})


// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Account' === collection: 'accounts'
const modelName = 'Posts'

module.exports = mongoose.model(modelName, Posts);