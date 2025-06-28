import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e66767;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
`

export const Form = styled.form`
  background-color: #e66767;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Input = styled.input`
  background-color: #fff;
  color: #000;
  border: none;
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  border-radius: 4px;

  &::placeholder {
    color: #a8a8a8;
  }
`

export const Button = styled.button`
  background-color: #fff;
  color: #e66767;
  font-weight: bold;
  border: none;
  height: 32px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f4f4f4;
  }
`

export const PedidoTitulo = styled.h3`
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #fff;
`

export const PedidoLista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 14px;
    margin-bottom: 4px;
  }
`
export const Titulo = styled.h2`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 24px;
`




