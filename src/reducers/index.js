import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer, // state.posts to access to the posts
  form: formReducer//adding the redux form
});

export default rootReducer;
