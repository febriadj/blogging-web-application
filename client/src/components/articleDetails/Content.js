import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'

function GetArticle(setArticle) {
  const { url } = useParams()

  return fetch('http://localhost:8080/articles/' + url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(result => result.json())
  .then(result => {
    setArticle(result[0])
  })
}

function createdAt(created_at) {
  const date = new Date(created_at)
  
  return date.toLocaleDateString('id-ID', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  })
}

function Content() {
  const [state, setState] = useState('')

  if (state.length <= 1) GetArticle(setState)

  return (
    <Fragment>
      <div className="header">
        <h2 className="title">{ state.title }</h2>
        <p className="description">{ state.description }</p>
        <p className="date">{ createdAt(state.created_at) }</p>
      </div>
    </Fragment>
  )
}

export default Content