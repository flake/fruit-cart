import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger();

export default createStore(
  combineReducers({
    app
  }), // new root reducer
  {},
  compose(
    applyMiddleware(
      router,
      epicMiddleware,
      logger
    ),
  )
)
