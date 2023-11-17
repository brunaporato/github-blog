import styled from 'styled-components'
import cover from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background: url(${cover}) no-repeat center center;
  background-size: cover;

  text-align: center;
  padding-top: 4rem;

  img {
    cursor: pointer;
  }
`
