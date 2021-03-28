import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

// components
import ListArticles from '../components/articles/ListArticles'

function Articles() {
  return (
    <Fragment>
      <Helmet><title>Articles</title></Helmet>
      <ListArticles />
    </Fragment>
  )
}

export default Articles