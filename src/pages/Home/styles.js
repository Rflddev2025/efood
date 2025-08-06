import styled from 'styled-components'

export const Background = styled.div`
  background-color: #fff8f2;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 64px 16px 80px; 
  margin: 0 auto;
`

export const Titulo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #e66767;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`


