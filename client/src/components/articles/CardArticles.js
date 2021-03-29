import React from 'react'
import { Link } from 'react-router-dom'

function CardArticle(props) {
  const createdAt = function() {
    let date = new Date(props.article.created_at)

    let result = date.toLocaleDateString('id-ID', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
    })

    return result
  }

  return (
    <div className="card">
      <p className="created-at">{ createdAt() }</p>
      <h1 className="title">
        <Link 
          to={ '/articles/' + props.article.url } 
          className="link">{ props.article.title }
        </Link>
      </h1>
      <p className="description">{ props.article.description }</p>
    </div>
  )
}

export default CardArticle