import styled from 'styled-components'

export const Sidebar = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  width: 360px;
  height: 100vh;
  background: #e66767;
  color: #fff;
  padding: 32px;
  overflow-y: auto;
  z-index: 999;
`

export const Titulo = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`

export const Item = styled.li`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 4px 0;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
  }
`

export const Total = styled.p`
  font-size: 18px;
  margin-top: 24px;
  font-weight: bold;
`

export const Botao = styled.button`
  margin-top: 16px;
  background: #fff;
  color: #e66767;
  padding: 12px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
