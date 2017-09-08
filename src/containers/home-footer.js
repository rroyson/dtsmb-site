import React from 'react'
import {Link} from 'react-router-dom'


const HomeFooter = function() {
  
  return (
    <footer className="pv4 ph3 ph5-ns tc">
    <Link to="">
      <i className="f2 black-90 dim dib h2 w2 mr3 br-100 ion-social-facebook"></i>
    </Link>
    
    <Link to="">
      <i className="f2 black-90 dim dib h2 w2 mr3 br-100 ion-social-twitter"></i>
    </Link>
    
    <Link to="">
      <i className="f2 black-90 dim dib h2 w2 mr3 br-100 ion-social-instagram"></i>
    </Link>
    
    <Link to="">
      <i className="f2 black-90 dim dib h2 w2 mr3 br-100 ion-social-youtube"></i>
    </Link>
  
      
      <div className="mt4">
        <a href="#" className="f6 link dim gray dib mr3 mr4-ns">Help</a>
        <a href="#" className="f6 link dim gray dib mr3 mr4-ns">Send feedback</a>
        <a href="#" className="f6 link dim gray dib mr3 mr4-ns">Privacy</a>
        <a href="#" className="f6 link dim gray dib">Terms</a>
      </div>
      
    </footer>
    
  )
}

export default HomeFooter

