import { ReactNode, createContext, useEffect, useState } from 'react'

export interface IssueType {
  number: number
  title: string
  created_at: string
  body: string
  html_url: string
  user: { login: string }
  comments: number
}

interface IssueContextType {
  issues: IssueType[]
}

export const IssueContext = createContext({} as IssueContextType)

interface IssueContextProviderProps {
  children: ReactNode
}

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<IssueType[]>([])

  // Change it to your username
  const username = 'brunaporato'

  // Change it to the repository you want to fetch issues from
  const repo = 'github-blog'

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}/issues`,
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
    <IssueContext.Provider value={{ issues }}>{children}</IssueContext.Provider>
  )
}
