import { FETCH_POSTS } from '../actions'; //nothing to mention since we import from index.js
import _ from 'lodash';

export default function (state = {}, action) {//default state to empty objectß
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data);//[post1, post2]
            return _.mapKeys(action.payload.data, 'id');//massage data , { id1: post1, id2: post2}
        default:
            return state;
    }
}