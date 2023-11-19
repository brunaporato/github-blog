import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(NavLink)`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  text-decoration: none;
  color: ${(props) => props.theme['base-text']};

  height: 16.25rem;
  width: 26rem;

  flex-shrink: 0;

  display: grid;
  grid-template-areas:
    'title time'
    'content content';

  grid-template-rows: 0.5fr auto;
  row-gap: 1.25rem;

  h1 {
    font-size: 1.25rem;
    line-height: 160%;
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
  }

  p {
    max-height: 8rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
`
