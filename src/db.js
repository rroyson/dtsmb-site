import fetch from 'isomorphic-fetch'
import { CREATE_EMAIL } from './constants'
const apiUrl = process.env.REACT_APP_API_URL

const getOptions = (method = 'GET', body = null) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body && JSON.stringify(body)
  }
}

export const createEmail = history => (dispatch, getState) => {
  console.log('getstate', getState().form)
  fetch(apiUrl + `contact`, getOptions('POST', getState().form))
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_EMAIL,
        payload: {
          name: '',
          address: '',
          email: '',
          date: '',
          venueName: '',
          venueLocation: '',
          comments: ''
        }
      })
    )
    .then(() => history.push(`/contact`))
    .catch(err => console.log(err))
}
