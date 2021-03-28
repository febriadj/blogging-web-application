import React, { Component } from 'react'
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
      <div id="list-articles">
        <div id="list-articles-wrap">
          
          {
            listArticles.map(article => {
              return <CardArticle article={ article } key={ article.id } />
            })
          }
  
        </div>
      </div>
    )
  }
}

export default ListArticles