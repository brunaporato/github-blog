import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  .links-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-weight: 700;
      font-size: 0.75rem;
      margin-bottom: 1.25rem;
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  .icons {
    display: flex;
    gap: 2rem;
    align-items: center;
    color: ${(props) => props.theme['base-span']};

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
