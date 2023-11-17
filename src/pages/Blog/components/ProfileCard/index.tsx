import { ProfileCardContainer } from './styles'
import { SiGithub } from 'react-icons/si'
import { RiBuilding4Fill } from 'react-icons/ri'
import { FaUserGroup, FaArrowUpRightFromSquare } from 'react-icons/fa6'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <div className="image">
        <img src="https://github.com/brunaporato.png" alt="" />
      </div>

      <div className="infos">
        <h2>Bruna Porato</h2>
        <a href="http://github.com/brunaporato">
          GITHUB <FaArrowUpRightFromSquare />
        </a>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="icons">
          <SiGithub />
          <RiBuilding4Fill />
          <FaUserGroup />
        </div>
      </div>
    </ProfileCardContainer>
  )
}
