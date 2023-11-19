import styled from 'styled-components'

export const BlogContainer = styled.div`
  width: 100%;
  padding: 0 18rem;

  .search {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: 4.5rem 0 3rem;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 160%;
      }

      span {
        text-align: right;
        font-size: 0.75rem;
        line-height: 160%;
        color: ${(props) => props.theme['base-span']};
      }
    }
  }
`
