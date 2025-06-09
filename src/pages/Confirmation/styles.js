import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Titulo = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #e66767;
`

export const Paragrafo = styled.p`
  font-size: 14px;
  color: #333;
`

export const Botao = styled.button`
  background-color: #e66767;
  color: #fff;
  font-weight: bold;
  border: none;
  height: 32px;
  cursor: pointer;
  margin-top: 16px;
  transition: 0.3s ease;

  &:hover {
    background-color: #cf5a5a;
  }
`

