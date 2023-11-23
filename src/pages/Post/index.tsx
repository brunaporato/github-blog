import { useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { PostContainer } from './styles'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'

export interface PostType {
  body: string
  html_url: string
  title: string
  comments: number
  created_at: string
  user: { login: string }
}

export function Post() {
  const date = String(new Date())

  const [post, setPost] = useState<PostType>({
    body: '',
    html_url: '',
    title: '',
    comments: 0,
    created_at: date,
    user: { login: '' },
  })

  const { id } = useParams()

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/brunaporato/github-blog/issues/${id}`,
        )
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error('Erro ao obter as issues:', error)
      }
    }

    fetchPost()
  }, [id])

  return (
    <PostContainer>
      <Header post={post} />
      <main>
        <Markdown>{post.body}</Markdown>
      </main>
    </PostContainer>
  )
}
