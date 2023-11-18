import { ProfileCardContainer, ProfileImg, UserInfo } from './styles'
import { SiGithub } from 'react-icons/si'
import { RiBuilding4Fill } from 'react-icons/ri'
import { FaUserGroup, FaArrowUpRightFromSquare } from 'react-icons/fa6'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfileImg>
        <img src="https://github.com/brunaporato.png" alt="" />
      </ProfileImg>

      <UserInfo>
        <h2>Bruna Porato</h2>
        <a
          href="http://github.com/brunaporato"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB <FaArrowUpRightFromSquare />
        </a>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="icons">
          <section className="username">
            <SiGithub />
            brunaporato
          </section>
          <section className="company">
            <RiBuilding4Fill />
            ByteCriativo;
          </section>
          <section className="followers">
            <FaUserGroup />
            32 seguidores
          </section>
        </div>
      </UserInfo>
    </ProfileCardContainer>
  )
}
