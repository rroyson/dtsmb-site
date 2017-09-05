import React from 'react'
import { connect } from 'react-redux'
import Title from '../components/title'
var googleFonts = require('google-fonts')

const Header = function(props) {
  return (
    <div className="pa2 bg-black-80 white-60 pb1 athelas">
      <header>

        <h3 className="tl dib-ns avenir pa2">{props.app.title}</h3>
        <div
          className="dib-ns pr2 flex justify-between"
          style={{
            float: 'right'
          }}
        >
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
            href="/"
          >
            How it Works
          </a>
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
            href="/"
          >
            Pricing
          </a>
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
            href="/"
          >
            About
          </a>
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
            href="/"
          >
            Careers
          </a>
          <a
            className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
            href="/"
          >
            Sign Up
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
