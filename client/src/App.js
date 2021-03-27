import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import Articles from './pages/Articles'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/articles" component={ Articles } />

        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
