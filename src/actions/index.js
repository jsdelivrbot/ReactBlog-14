import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';


// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// const API_KEY = '?key=thisIsMyK3y';

const ROOT_URL = 'http://localhost:3000';
const API_KEY = '';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        //automatically resolved, reponse here,
        // add request result to the payload of the action we re returning
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}