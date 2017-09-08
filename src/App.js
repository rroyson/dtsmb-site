import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './pages/welcome'
import Home from './pages/home'
import About from './pages/about'
import Bookings from './pages/bookings'
import Form from './pages/contact-form'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/contact" component={Form} />

      </div>
    </BrowserRouter>
  )
}

export default App
