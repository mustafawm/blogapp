import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'

import routes from './routes'
import reducers from './reducers'

// all actions will go through the 'redux-promise' middleware first,
// then proceed to reducers
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, 
  document.querySelector('#app')
)
