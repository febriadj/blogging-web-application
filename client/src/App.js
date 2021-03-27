import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/css/app.css'

// import pages
import Home from './pages/Home'
import Articles from './pages/Articles'
import NotFound from './pages/NotFound'

// import header and footer
import Header from './components/header/Header'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <div id="app">
          <div id="app-wrap">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/articles" component={Articles} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
