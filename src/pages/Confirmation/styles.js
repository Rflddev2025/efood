import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e66767;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  padding: 40px 16px;
  text-align: center;
`

export const Box = styled.div`
  max-width: 320px;
`

export const Titulo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 16px;
`

export const Paragrafo = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 12px;
`

export const Botao = styled.button`
  background-color: #fff;
  color: #e66767;
  font-weight: bold;
  font-size: 16px;
  border: none;
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f4f4f4;
  }
`


