import React from 'react'
import { connect } from 'react-redux'
import Title from '../components/title'
var googleFonts = require('google-fonts')

const Header = function(props) {
  return (
    <div className="pa3 bg-black-80 white athelas">
      <header>

        <a
          className="tl dim f3 fw1 dib-ns avenir white pa2 no-underline"
          href="/"
        >
          {props.app.title}
        </a>
        <div
          className="pr2 flex"
          style={{
            float: 'right'
          }}
        >
          <a
            className="f5 fw1 dim flex  no-underline white  pv2 ph3"
            href="/about"
          >
            The Band
          </a>
          <a
            className="f5 fw1 dim flex no-underline white  pv2 ph3"
            href="/bookings"
          >
            Bookings
          </a>
          <a
            className="f5 fw1 dim flex no-underline white pv2 ph3"
            href="/contact"
          >
            Contact
          </a>

        </div>
      </header>
    </div>
  )
}

const connector = connect(mapStateToProps)

export default connector(Header)

function mapStateToProps(state) {
  return state
}
