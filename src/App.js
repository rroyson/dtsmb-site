import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './pages/welcome'
import Home from './pages/home'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  )
}

export default App
