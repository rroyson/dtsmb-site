import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../containers/header'
import HomeFooter from '../containers/home-footer'
import { TextField, Button } from 't63'

const Form = function() {
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
                <form className="tl ph2">
                  <TextField name="Full Name" />
                  <TextField name="Address" />
                  <TextField name="E-mail" />
                  <TextField name="Venue Name" />
                  <TextField name="Venue Location" />
                  <TextField name="Date of Event" />
                  <textarea
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

export default Form
