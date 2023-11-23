import { formatDistanceToNow } from 'date-fns'
import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  body: string
  date: string
  id: number
}
export function PostCard({ title, body, date, id }: PostCardProps) {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true })
  return (
    <PostCardContainer to={`/post/${id}`}>
      <h1>{title}</h1>
      <span>{formattedDate}</span>
      <p>{body}</p>
    </PostCardContainer>
  )
}
