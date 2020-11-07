import axios from 'axios';

//API url pointing to our backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = ( newPost ) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
/*

1. create function to target backend route like the above
2. create action that uses functions here to dispatch action.type to reducers
3. create reducer case to consume the action previously sent
4.go inside component and dispatch action ej. Post

*/