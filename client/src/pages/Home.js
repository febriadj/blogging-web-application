import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

// components
import Banner from '../components/home/Banner'

function Home() {
  return (
    <Fragment>
      <Helmet><title>Home</title></Helmet>
      <Banner />
    </Fragment>
  )
}

export default Home