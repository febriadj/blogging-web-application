import React, { Component } from 'react'

class PostArticles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      file: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { title, description, file } = this.state
    const fd = new FormData()

    fd.append('title', title)
    fd.append('description', description)
    fd.append('file', file)

    fetch('http://localhost:8080/articles', {
      method: 'POST',
      body: fd
    })
    .then(() => this.setState({
      title: '',
      description: '',
      file: null
    }))
    .catch(err => {
      console.log(err)
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFile = (event) => {
    this.setState({
      file: event.target.files[0]
    })
  }

  render() {
    return (
      <div className="uploads">
        <form onSubmit={ this.handleSubmit } encType="multipart/form-data">
          <label for="title">Title Article</label>
          <input 
            type="text" 
            name="title"
            placeholder="Provide the title of the Article"
            value={ this.state.title }
            onChange={ this.handleChange }
          >
          </input>
          <label for="title">Description Article</label>
          <input 
            type="text" 
            name="description"
            placeholder="Provide a brief description of the Article"
            value={ this.state.description }
            onChange={ this.handleChange }
          >
          </input>
          <input 
            type="file"
            name="file"
            onChange={ this.handleFile }
          >
          </input>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default PostArticles