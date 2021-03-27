import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'

function Banner() {
  return (
    <div id="banner">
      <div id="banner-wrap">
        <h1 className="header">Where good ideas find you</h1>
        <p className="subject">Read and share new perspectives on just about any topic. Everyone’s welcome. Learn more.</p>
        <Link to="/start" className="link started-btn">Get Started</Link>
      </div>
    </div>
  )
}

export default Banner