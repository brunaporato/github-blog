import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { IoIosArrowBack } from 'react-icons/io'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'

export function Header() {
  return (
    <HeaderContainer>
      <section className="links-top">
        <NavLink to="/">
          <IoIosArrowBack />
          voltar
        </NavLink>
        <NavLink to="#">
          ver no github
          <FaArrowUpRightFromSquare />
        </NavLink>
      </section>
      <h1>JavaScript data types and data structures</h1>
      <section className="icons">
        <div className="user">
          <SiGithub />
          <span>brunaporato</span>
        </div>
        <div className="time">
          <FaCalendarDay />
          <span>Há 1 dia</span>
        </div>
        <div className="comments">
          <FaComment />
          <span>5 comentário</span>
        </div>
      </section>
    </HeaderContainer>
  )
}
