import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { IoIosArrowBack } from 'react-icons/io'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import { PostType } from '../..'
import { formatDistanceToNow } from 'date-fns'

interface HeaderProps {
  post: PostType
}

export function Header({ post }: HeaderProps) {
  const date = new Date(post.created_at)

  const formattedDate = formatDistanceToNow(date, {
    addSuffix: true,
  })

  return (
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
  )
}
