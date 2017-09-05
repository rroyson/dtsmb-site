import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../containers/header'

const Home = function() {
  return (
    <div>

      <main className="athelas">
        <div>

          <div
            className="vh-100 w-100 bg-dark-gray white cover flex flex-column"
            style={{
              backgroundImage:
                'url("https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10644981_1529062614008312_4558642661077359055_n.jpg?oh=8ff6acd9e247ae2bc7dfcf6e0fcf4e8f&oe=5A574D53")'
            }}
          >
            <div className="o-60">
              <Header />

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
