import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'

import NewPost from './containers/NewPost'
import ShowPost from './containers/ShowPost'
import PostsList from './containers/PostsList'

const Greeting = () => <h5>Hello</h5>


export default (
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={PostsList} />
      <Route path='posts/new' component={NewPost} />
      <Route path='posts/:id' component={ShowPost} />
    </Route>
  </Router>
)