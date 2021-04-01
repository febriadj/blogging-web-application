import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/css/app.css'

// import pages
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetails from './pages/ArticleDetails'
import NotFound from './pages/NotFound'
import PostArticles from './pages/PostArticles'

// import header and footer
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/articles" exact component={ Articles } />
          <Route path="/post" exact component={ PostArticles } />
          <Route path="/articles/:url" exact component={ ArticleDetails } />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
