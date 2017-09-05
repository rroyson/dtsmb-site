import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = function() {
  return (
    <div>

      <main className="athelas">
        <div>

          <div
            className="vh-100 w-100 tc bg-dark-gray white cover flex flex-column"
            style={{
              backgroundImage:
                'url("https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10644981_1529062614008312_4558642661077359055_n.jpg?oh=8ff6acd9e247ae2bc7dfcf6e0fcf4e8f&oe=5A574D53")'
            }}
          >
            <div className="flex fr w-100 vh-25 dib">
              <nav className="dt w-100 mw8 ">
                <div className="dtc w2 v-mid pa3">
                  <a
                    href="/"
                    className="dib w2 h2 pa1 ba b--white-90 grow-large border-box"
                  >
                    <svg
                      className="link white-90 hover-white"
                      data-icon="skull"
                      viewBox="0 0 32 32"
                    >
                      <title>skull icon</title>
                      <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12" />
                    </svg>
                  </a>
                </div>
                <div className="dtc v-mid tr pa3">
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
              </nav>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30%'
              }}
            >
              <h1 className="ma0 f1 fw1 i white-70 ">
                The Charleston Wedding Band
              </h1>
            </div>
            <div className="flex-column vh-50">
              <a
                className="f5 fw3 hover-white no-underline white-80 dib pv2 ph3 ba"
                href="/home"
              >
                Enter
              </a>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Welcome
