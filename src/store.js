import { createStore, combineReducers, applyMiddleware } from 'redux'
import moment from 'moment'
import thunk from 'redux-thunk'
import { merge } from 'ramda'

const store = createStore(
  combineReducers({
    app,
    form
  }),
  applyMiddleware(thunk)
)

export default store

// reducers
function app(state = { title: 'The Charleston Wedding Band' }, action) {
  switch (action.type) {
    case 'SET_APP_TITLE':
      return merge(state, { title: action.payload })
    default:
      return state
  }
}

function form(
  state = {
    name: '',
    address: '',
    email: '',
    venueName: '',
    venueLocation: '',
    comments: '',
    date: moment(),
    dateChange: ''
  },
  action
) {
  switch (action.type) {
    case 'SET_FORM_NAME':
      return merge(state, { name: action.payload })
    case 'SET_FORM_ADDRESS':
      return merge(state, { address: action.payload })
    case 'SET_FORM_EMAIL':
      return merge(state, { email: action.payload })
    case 'SET_FORM_VENUE_NAME':
      return merge(state, { venueName: action.payload })
    case 'SET_FORM_VENUE_LOCATION':
      return merge(state, { venueLocation: action.payload })
    case 'SET_FORM_COMMENTS':
      return merge(state, { comments: action.payload })
    case 'SET_FORM_DATE_SELECT':
      return merge(state, { date: action.payload })
    default:
      return state
  }
}
