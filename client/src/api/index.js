import axios from "axios";


const baseUrl = 'http://localhost:3000/post'
const userUrl = 'http://localhost:3000/user'
const api = {
    postAll : async() => {
        const post = await axios.get(baseUrl);
        return post.data
    },
    singlePost : async(slug) => {
        const onePost = await axios.get(baseUrl + '?slug=' +slug)
        return onePost.data
    },
    register: async(data) => {
        const regis = await axios.post(userUrl, {data});
        return JSON.stringify({status : "sukses"})
        // console.log(data);
    } 
}


export {
    api
}