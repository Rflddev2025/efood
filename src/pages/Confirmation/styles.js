import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0;
  font-family: 'Roboto', sans-serif;
  color: #fff;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Paragrafo = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.4;
`

export const Botao = styled.button`
  background-color: #fff;
  color: #e66767;
  font-weight: bold;
  font-size: 14px;
  border: none;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f4f4f4;
  }
`
