import { useEffect, useState } from 'react'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { BlogContainer } from './styles'

interface IssueType {
  id: number
  number: number
  title: string
  created_at: string
  body: string
}

export function Blog() {
  const [issues, setIssues] = useState<IssueType[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api.github.com/repos/brunaporato/github-blog/issues',
        )
        const data = await response.json()
        setIssues(data)
      } catch (error) {
        console.error('Erro ao obter as issues:', error)
      }
    }

    fetchData()
  }, [])

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
