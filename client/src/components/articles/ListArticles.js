import React, { Component, Fragment } from 'react'
import CardArticle from './CardArticles'

class ListArticles extends Component {
  constructor(props) {
    super()

    this.state = { listArticles: [] }
  }

  componentDidMount() {
    fetch('http://localhost:8080/articles', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(result => result.json())
    .then(result => this.setState({
      listArticles: result
    }))
  }

  render() {
    const { listArticles } = this.state

    return (
      <Fragment>
        { listArticles.map(article => {
            return <CardArticle article={ article } key={ article.id } />
        }) }
      </Fragment>          
    )
  }
}

export default ListArticles