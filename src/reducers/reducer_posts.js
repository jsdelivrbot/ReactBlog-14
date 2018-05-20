import { FETCH_POSTS, FETCH_POST } from '../actions'; //nothing to mention since we import from index.js
import _ from 'lodash';

export default function (state = {}, action) {//default state to empty object
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);//returns new state object with the post id (action.payload) removed from it
        case FETCH_POST:
            //es5
            //const post = action.payload.data;
            //const newState = {...state};
            //newState[post.id]=post;
            //return newState

            //es6
            // add in the state object the key/value pair 
            //key=action.payload.data.id and the value=action.payload.data
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            console.log(action.payload.data);//[post1, post2]
            return _.mapKeys(action.payload.data, 'id');//massage data , { id1: post1, id2: post2}
        default:
            return state;
    }
}