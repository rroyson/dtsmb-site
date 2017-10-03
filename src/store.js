import { createStore, combineReducers, applyMiddleware } from 'redux'
import moment from 'moment'
import thunk from 'redux-thunk'
import { merge } from 'ramda'
import {
  SET_FORM_NAME,
  SET_FORM_PHONE,
  SET_FORM_EMAIL,
  SET_FORM_VENUE_NAME,
  SET_FORM_VENUE_LOCATION,
  SET_FORM_COMMENTS,
  SET_FORM_DATE_SELECT,
  CREATE_EMAIL,
  CLEAR_FORM
} from './constants'

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

//default date
//date: moment()

function form(
  state = {
    name: '',
    phone: '',
    email: '',
    venueName: '',
    venueLocation: '',
    comments: '',
    date: '',
    dateChange: ''
  },
  action
) {
  switch (action.type) {
    case SET_FORM_NAME:
      return merge(state, { name: action.payload })
    case SET_FORM_PHONE:
      return merge(state, { phone: action.payload })
    case SET_FORM_EMAIL:
      return merge(state, { email: action.payload })
    case SET_FORM_VENUE_NAME:
      return merge(state, { venueName: action.payload })
    case SET_FORM_VENUE_LOCATION:
      return merge(state, { venueLocation: action.payload })
    case SET_FORM_COMMENTS:
      return merge(state, { comments: action.payload })
    case SET_FORM_DATE_SELECT:
      return merge(state, { date: action.payload })
    case CREATE_EMAIL:
      return state
    case CLEAR_FORM:
      return (state = {
        name: '',
        phone: '',
        email: '',
        venueName: '',
        venueLocation: '',
        comments: '',
        date: '',
        dateChange: ''
      })
    default:
      return state
  }
}
