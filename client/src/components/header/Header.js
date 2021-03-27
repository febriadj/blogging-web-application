import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id="header">
      <div id="header-wrap">
        <span className="icon"></span>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
        </div>
      </div>
    </div>
  )
}

export default Header