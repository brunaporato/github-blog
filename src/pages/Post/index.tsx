import { useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { PostContainer } from './styles'
import Markdown from 'react-markdown'
import { useContext } from 'react'
import { IssueContext } from '../../contexts/IssueContext'

export function Post() {
  const { issues } = useContext(IssueContext)
  const { id } = useParams()

  const postId = id != null ? parseInt(id, 10) : 0

  const post = issues.find((issue) => issue.number === postId)

  return (
    <PostContainer>
      <Header post={post} />
      <main>
        {post ? (
          <Markdown>{post.body}</Markdown>
        ) : (
          <p>Nenhuma postagem encontrada para o ID {id}</p>
        )}
      </main>
    </PostContainer>
  )
}
