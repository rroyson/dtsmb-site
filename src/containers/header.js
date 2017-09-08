import React from 'react'
import { connect } from 'react-redux'
import Title from '../components/title'
var googleFonts = require('google-fonts')

const Header = function(props) {
  return (
    <div className="pa2 bg-black-80 white pb1 athelas">
      <header>

        <h3 className="tl dib-ns avenir pa2">{props.app.title}</h3>
        <div
          className="pr2 flex"
          style={{
            float: 'right'
          }}
        >
          <a
            className="f5 fw4 flex hover-white no-underline white  pv2 ph3"
            href="/"
          >
            The Band
          </a>
          <a
            className="f5 fw4 flex hover-white no-underline white  pv2 ph3"
            href="/"
          >
            Bookings
          </a>
          <a
            className="f5 fw4 flex hover-white no-underline white pv2 ph3"
            href="/"
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
