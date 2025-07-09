import styled from 'styled-components'

export const Background = styled.div`
  background-color: #FFF8F2;
  min-height: 100vh;
  padding: 64px 0 32px;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`


