import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=somerandomapikey'

export const fetchPosts = () => {
  const promise = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return { type: 'FETCH_POSTS', payload: promise }
}

export const fetchPost = id => {
  const promise = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`)

  return { type: 'FETCH_POST', payload: promise }
}

export const createPost = (fields) => {
  const promise = axios.post(`${ROOT_URL}/posts${API_KEY}`, fields)

  return { type: 'CREATE_POST', payload: promise }
}

export const deletePost = id => {
  const promise = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)

  return { type: 'DELETE_POST', payload: promise }
}




