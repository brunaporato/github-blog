import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCard />
      <SearchInput />
      <PostCard />
    </BlogContainer>
  )
}
