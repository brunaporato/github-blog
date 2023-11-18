import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem 2rem 2rem 2.5rem;

  flex-shrink: 0;

  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -5rem;

  display: flex;
  gap: 2rem;
`

export const ProfileImg = styled.div`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;

  flex-shrink: 0;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

export const UserInfo = styled.div`
  display: grid;
  grid-template-areas:
    'title github'
    'description description'
    'icons icons';

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    grid-area: title;
    justify-self: start;
  }

  a {
    grid-area: github;
    justify-self: end;
    align-self: center;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    text-decoration: none;

    color: ${(props) => props.theme.blue};

    border-bottom: 1px solid transparent;

    height: fit-content;
    padding: 0.2rem;
  }

  a:hover {
    border-color: ${(props) => props.theme.blue};
  }

  p {
    line-height: 160%;
    grid-area: description;
  }

  .icons {
    grid-area: icons;

    display: flex;
    gap: 1.5rem;
    align-items: center;

    section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
