import axios from "axios";


const baseUrl = 'http://localhost:3000/post'

const api = {
    postAll : async() => {
        const post = await axios.get(baseUrl);
        return post.data
    },
    singlePost : async(slug) => {
        const onePost = await axios.get(baseUrl + '?slug=' +slug)
        return onePost.data
    }
}


export {
    api
}