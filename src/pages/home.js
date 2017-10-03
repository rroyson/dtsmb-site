import React from 'react'
import Header from '../containers/header'
import HomeFooter from '../containers/home-footer'

const Home = function() {
  return (
    <div>

      <main className="athelas">
        <div>

          <div
            className="vh-100 w-100 overflow-scroll bg-dark-gray white cover flex-column"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/f2a084_0bef4e0fafa8409b8dc7528fef0ff5ac.jpg/v1/fill/w_385,h_480,al_c,q_80,usm_0.66_1.00_0.01/f2a084_0bef4e0fafa8409b8dc7528fef0ff5ac.webp")'
            }}
          >
            <div>
              <Header />

            </div>
            <div className="center flex-column mt4 w-100 tc bg-white-80 black avenir">
              <article>
                <h1 className="pa2">
                  {' '}hello paragraph{' '}
                </h1>
                <p className="ml3 tl">
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
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
            </div>
          </div>
          <div className="flex justify-center ">
            <HomeFooter />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
