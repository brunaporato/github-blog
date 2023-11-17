import { HeaderContainer } from './styles'
import logotipo from '../../assets/logo-title.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logotipo} alt="Github Blog" />
    </HeaderContainer>
  )
}
