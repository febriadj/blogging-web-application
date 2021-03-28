import React from 'react'

function CardArticle(props) {
  return (
    <div className="card">
      <h2 className="title">{ props.article.title }</h2>
      <p className="description">{ props.article.description }</p>
    </div>
  )
}

export default CardArticle