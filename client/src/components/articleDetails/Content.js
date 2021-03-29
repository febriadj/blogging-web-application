import React from 'react'
import { useParams } from 'react-router-dom'

function fetchArticle(url) {
  fetch('http://localhost:8080/articles/' + url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(result => result.json())
  .then(result => console.log(result[0]))
}

function Content() {
  const { url } = useParams()

  fetchArticle(url)
  return (
    <div className="content"></div>
  )
}

export default Content