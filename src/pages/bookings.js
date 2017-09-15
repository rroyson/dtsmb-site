import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../containers/header'
import HomeFooter from '../containers/home-footer'

const Bookings = function() {
  return (
    <div>

      <main className="athelas">
        <div>

          <div
            className=" vh-100 w-100 cover overflow-scroll bg-dark-gray white flex flex-column"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dq832axtv/image/upload/c_crop/v1505510659/Full_band_n1rwcb.jpg")'
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
              <div className="center flex-column mt4 w-75 tc bg-white-80 black avenir">
                <article className="o-60 pa4">
                  <h1 className="pa2">
                    {' '}Bookings{' '}
                  </h1>
                  <p className="ml3 tl">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui
                    officia
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et
                    harum quidem rerum facilis est et expedita distinctio. Nam
                    libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et aut officiis
                    debitis aut rerum necessitatibus saepe eveniet ut et
                    voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat.
                  </p>
                </article>
                <article className="pa4">
                  <h1 className="pa2">
                    {' '}Media{' '}
                  </h1>
                </article>
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

export default Bookings
