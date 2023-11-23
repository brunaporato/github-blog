import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { IoIosArrowBack } from 'react-icons/io'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import { formatDistanceToNow } from 'date-fns'
import { IssueType } from '../../../../contexts/IssueContext'

interface HeaderProps {
  post: IssueType | undefined
}

export function Header({ post }: HeaderProps) {
  const date = post !== undefined ? new Date(post.created_at) : new Date()

  const formattedDate = formatDistanceToNow(date, {
    addSuffix: true,
  })

  return (
    <header>
      {post && (
        <HeaderContainer>
          <section className="links-top">
            <NavLink to="/">
              <IoIosArrowBack />
              voltar
            </NavLink>
            <NavLink to={post.html_url}>
              ver no github
              <FaArrowUpRightFromSquare />
            </NavLink>
          </section>
          <h1>{post.title}</h1>
          <section className="icons">
            <div className="user">
              <SiGithub />
              <span>{post.user.login}</span>
            </div>
            <div className="time">
              <FaCalendarDay />
              <span>{formattedDate}</span>
            </div>
            <div className="comments">
              <FaComment />
              <span>{post.comments} comments</span>
            </div>
          </section>
        </HeaderContainer>
      )}
    </header>
  )
}
