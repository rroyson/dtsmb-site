import fetch from 'isomorphic-fetch'
import { CREATE_EMAIL, CLEAR_FORM } from './constants'
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
  fetch(apiUrl + `contact`, getOptions('POST', getState().form))
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_EMAIL,
        payload: data
      })
    )
    .then(data =>
      dispatch({
        type: CLEAR_FORM
      })
    )
    .then(() => history.push(`/contact`))
  //.catch(err => console.log(err))
}
