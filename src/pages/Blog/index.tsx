import { useContext } from 'react'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { BlogContainer } from './styles'
import { IssueContext } from '../../contexts/IssueContext'

export function Blog() {
  const { issues } = useContext(IssueContext)

  return (
    <BlogContainer>
      <ProfileCard />
      <section className="search">
        <div className="top">
          <h2>Publicações</h2>
          <span>
            {issues.length} {issues.length > 1 ? 'publicações' : 'publicação'}
          </span>
        </div>
        <SearchInput />
      </section>
      <section className="cards">
        {issues.map((issue) => {
          return (
            <PostCard
              key={issue.number}
              title={issue.title}
              body={issue.body}
              date={issue.created_at}
              id={issue.number}
            />
          )
        })}
      </section>
    </BlogContainer>
  )
}
