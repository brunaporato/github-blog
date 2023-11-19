import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCard />
      <section className="search">
        <div className="top">
          <h2>Publicações</h2>
          <span>X publicações</span>
        </div>
        <SearchInput />
      </section>
      <PostCard />
    </BlogContainer>
  )
}
