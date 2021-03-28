import { useParams } from 'react-router-dom'

function ArticleDetails() {
  const { title } = useParams()
  return (
    <div id="result">
      {title}
    </div>
  )
}

export default ArticleDetails