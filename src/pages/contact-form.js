import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from 'react-router-dom'
import Header from '../containers/header'
import HomeFooter from '../containers/home-footer'
import { TextField, Button } from 't63'
import { connect } from 'react-redux'
import {
  SET_FORM_NAME,
  SET_FORM_ADDRESS,
  SET_FORM_EMAIL,
  SET_FORM_VENUE_NAME,
  SET_FORM_VENUE_LOCATION,
  SET_FORM_COMMENTS,
  SET_FORM_DATE_CHANGE,
  SET_FORM_DATE_SELECT
} from '../constants'
import { createEmail } from '../db'

class Form extends React.Component {
  render() {
    const props = this.props
    return (
      <div>

        <main className="athelas">
          <div>

            <div
              className=" vh-100 w-100 cover overflow-scroll bg-dark-gray white flex flex-column"
              style={{
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2017/06/15/14/29/oak-trees-2405592_960_720.jpg")'
              }}
            >
              <div>
                <Header />

              </div>

              <div className="flex vh-100" />
              <div
                className="mt7 w-100 bg-dark-gray white flex-column"
                style={{
                  backgroundImage:
                    'url("http://res.cloudinary.com/dq832axtv/image/upload/v1505245852/vintage-concrete_rzuvfw.png")'
                }}
              >
                <div className="tc black-70">
                  <h1> Contact Us </h1>
                </div>
                <div className="center flex-column pt4 w-75 tc bg-white-80 o-60 black avenir">
                  <form
                    className="tl ph2"
                    onSubmit={props.submitEmail(props.history)}
                  >
                    <TextField
                      name="Full Name"
                      value={props.form.name}
                      onChange={props.handleName}
                    />
                    <TextField
                      name="Address"
                      value={props.form.address}
                      onChange={props.handleAddress}
                    />
                    <TextField
                      name="E-mail"
                      type="email"
                      value={props.form.email}
                      onChange={props.handleEmail}
                    />
                    <TextField
                      name="Venue Name"
                      value={props.form.venueName}
                      onChange={props.handleVenueName}
                    />
                    <TextField
                      name="Venue Location"
                      value={props.form.venueLocation}
                      onChange={props.handleVenueLocation}
                    />
                    <div className="tl pb2">
                      <DatePicker
                        selected={props.form.date}
                        onChange={props.handleDateChange}
                      />
                    </div>
                    <textarea
                      value={props.form.comments}
                      onChange={props.handleComments}
                      rows="4"
                      cols="50"
                      name="comments"
                      placeholder="Any special requests/comments?"
                    />
                    <div className="pa4">
                      <div className="tc">
                        <Button className="w-50 bg-green ba br2 b--light-green">
                          Submit
                        </Button>
                      </div>
                      <div className="tc">
                        <Button className="w-50 ba br2 ">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="vh-25 va-bottom">
                  <HomeFooter />
                </div>
              </div>
            </div>
            <div className="flex justify-center " />
          </div>
        </main>
      </div>
    )
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

function mapActionsToProps(dispatch) {
  return {
    submitEmail: history => e => {
      // console.log('history', history)
      e.preventDefault()
      dispatch(createEmail(history))
    },
    handleName: e => dispatch({ type: SET_FORM_NAME, payload: e.target.value }),
    handleAddress: e =>
      dispatch({ type: SET_FORM_ADDRESS, payload: e.target.value }),
    handleEmail: e =>
      dispatch({ type: SET_FORM_EMAIL, payload: e.target.value }),
    handleVenueName: e =>
      dispatch({ type: SET_FORM_VENUE_NAME, payload: e.target.value }),
    handleVenueLocation: e =>
      dispatch({ type: SET_FORM_VENUE_LOCATION, payload: e.target.value }),
    handleComments: e =>
      dispatch({ type: SET_FORM_COMMENTS, payload: e.target.value }),
    handleDateChange: date =>
      dispatch({ type: SET_FORM_DATE_SELECT, payload: date })
  }
}

function mapStateToProps(state) {
  console.log('state', state.form.date._d)
  return {
    form: state.form
  }
}

export default connector(Form)
