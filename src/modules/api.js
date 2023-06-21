import axios from "axios";

const callAPI = async (path, method, data) => {
    const res = await axios({
        url: `http://localhost:3000/${path}`,
        method,
        ...data
    })

    return res.data
}

export const api = {
    getPosts(){
        return callAPI('posts', 'GET')
    },

    deletePost(id){
        return callAPI(`posts/${id}`, `DELETE`)
    },

    createPost(data){
        return callAPI(`posts/`, `POST`, {data})
    },

    updatePost(id, data){
        return callAPI(`posts/${id}`, `POST`, {data})
    }
}
