import { formatDistanceToNow } from 'date-fns'
import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  body: string
  date: string
}
export function PostCard({ title, body, date }: PostCardProps) {
  const formattedDate = formatDistanceToNow(new Date(date))
  return (
    <PostCardContainer to="/post">
      <h1>{title}</h1>
      <span>{formattedDate}</span>

      <p>{body}</p>
    </PostCardContainer>
  )
}
