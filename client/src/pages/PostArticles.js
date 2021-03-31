import React from 'react'
import '../assets/css/postArticles.css'

// components
import PostForm from '../components/postArticles/PostForm'

function PostArticles() {
  return (
    <div id="post-articles">
      <div id="post-articles-wrap">
        <PostForm />
      </div>
    </div>
  )
}

export default PostArticles