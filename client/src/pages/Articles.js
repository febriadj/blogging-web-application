import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import '../assets/css/articles.css'

// components
import ListArticles from '../components/articles/ListArticles'

function Articles() {
  return (
    <Fragment>
      <Helmet><title>Articles</title></Helmet>
      <div id="articles">
        <div id="articles-wrap">
          <ListArticles />
        </div>
      </div>
    </Fragment>
  )
}

export default Articles