import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'

import app from './app-reducer'

const logger = createLogger();

export default createStore(
  combineReducers({
    app
  }), // new root reducer
  {},
  compose(
    applyMiddleware(
      logger
    ),
  )
)
