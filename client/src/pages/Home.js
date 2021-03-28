import React from 'react'
import { Helmet } from 'react-helmet'

// components
import Banner from '../components/home/Banner'

function Home() {
  return (
    <div id="home">
      <div id="home-wrap">
        <Helmet><title>Home</title></Helmet>
        <Banner />
      </div>
    </div>
  )
}

export default Home