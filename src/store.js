import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { merge } from 'ramda'

const store = createStore(
  combineReducers({
    app
  }),
  applyMiddleware(thunk)
)

export default store

// reducers
function app(
  state = { title: 'The Charleston Wedding Band' },
  action
) {
  switch (action.type) {
    case 'SET_APP_TITLE':
      return merge(state, { title: action.payload })
    default:
      return state
  }
}