import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  height: 16.25rem;
  width: 20rem;

  flex-shrink: 0;

  display: grid;
  grid-template-areas:
    'title time'
    'content content';
  row-gap: 1.25rem;

  h1 {
    font-size: 1.25rem;
    line-height: 160%;
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
  }

  /* 
    TODO: descobrir como deixar o texto com "..."
    ao final mesmo quebrando as linhas
  */

  p {
    flex-shrink: 0;
    max-width: 22rem;
    max-height: 7rem;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
