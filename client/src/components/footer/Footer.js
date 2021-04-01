import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/footer.css'

function Footer() {
  return (
    <div id="footer">
      <div id="footer-wrap">
        <h2 className="icon">Blogging App</h2>
        <div className="menu">
          <Link to="/" className="link">Home</Link>
          <Link to="/articles" className="link">Articles</Link>
          <Link to="/post" className="link">Post</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer