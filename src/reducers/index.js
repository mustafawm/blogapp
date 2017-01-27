import { combineReducers } from 'redux'

import posts from './postsReducers'
import { reducer as form } from 'redux-form'

export default combineReducers({
  posts,
  form
})