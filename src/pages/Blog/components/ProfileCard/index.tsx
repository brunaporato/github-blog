import { ProfileCardContainer, ProfileImg, UserInfo } from './styles'
import { SiGithub } from 'react-icons/si'
import { RiBuilding4Fill } from 'react-icons/ri'
import { FaUserGroup, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

interface UserDataType {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

export function ProfileCard() {
  const [userData, setUserData] = useState<UserDataType>({
    login: '',
    avatar_url: '',
    html_url: '',
    name: '',
    company: '',
    bio: '',
    followers: 0,
  })

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(`https://api.github.com/users/brunaporato`)
      const data = await response.json()
      setUserData(data)
    }

    fetchUserData()
  }, [])

  return (
    <ProfileCardContainer>
      <ProfileImg>
        <img src={userData.avatar_url} alt="" />
      </ProfileImg>

      <UserInfo>
        <h2>{userData.name}</h2>
        <a href={userData.html_url} target="_blank" rel="noreferrer">
          GITHUB <FaArrowUpRightFromSquare />
        </a>
        <p>{userData.bio}</p>
        <div className="icons">
          <section className="username">
            <SiGithub />
            {userData.login}
          </section>
          <section className="company">
            <RiBuilding4Fill />
            {userData.company}
          </section>
          <section className="followers">
            <FaUserGroup />
            {userData.followers} seguidores
          </section>
        </div>
      </UserInfo>
    </ProfileCardContainer>
  )
}
