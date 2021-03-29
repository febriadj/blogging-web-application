import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import MarkdownView from 'react-showdown'

function GetArticle(setArticle) {
  const { url } = useParams()

  return fetch('http://localhost:8080/articles/' + url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(result => result.json())
  .then(result => {
    setArticle(result)
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
  const { details } = state

  if (state.length <= 1) GetArticle(setState)

  return (
    <Fragment>
      <div className="header">
        {
          details !== undefined ? 
            <Fragment>
              <h1 className="title">{ details.title }</h1>
              <p className="description">{ details.description }</p>
              <p className="date">{ createdAt(details.created_at) }</p>
            </Fragment>
          : null
        }
      </div>
      <div className="content">
        <MarkdownView 
          markdown={ state.content }
          options={{ table: true, emoji: true }}
        />
      </div>
    </Fragment>
  )
}

export default Content