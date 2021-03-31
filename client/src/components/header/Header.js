import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/header.css'
import headerIcon from '../../assets/images/medium-icon.png'

function Header() {
  return (
    <div id="header">
      <div id="header-wrap">
        <img src={ headerIcon } alt="desc" className="icon" />
        <div className="menu">
          <Link to="/" className="link">Home</Link>
          <Link to="/articles" className="link">Articles</Link>
          <Link to="/post" className="link started-btn">Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Header