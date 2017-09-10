import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=thisIsMyK3y';

export function fetchPosts() {
    //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    const request = axios.get('http://localhost:3000/api/posts');
    
    return {
        type: FETCH_POSTS,
        payload: request //automatically resolved, reponse here
    };
}