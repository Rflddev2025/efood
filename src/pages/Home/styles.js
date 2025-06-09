import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  list-style: none;
  padding: 0;
  margin-top: 32px;
`

export const Item = styled.li`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  h2 {
    font-size: 18px;
    margin: 16px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 0 16px 16px;
  }

  a {
    display: block;
    margin: 0 16px 16px;
    font-weight: bold;
    color: #e66767;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
