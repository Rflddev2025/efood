import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Sidebar = styled.aside`
  background-color: #e66767;
  width: 360px;
  max-width: 100%;
  height: 100%;
  padding: 24px 16px;
  overflow-y: auto;
  z-index: 1001;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  position: relative;
  color: #fff;

  display: flex;
  flex-direction: column;
`

export const Fechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
`

export const Titulo = styled.h2`
  margin: 0 0 24px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffebd9;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`

export const Imagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`

export const Info = styled.div`
  flex: 1;
  margin-left: 8px;
  font-family: 'Roboto', sans-serif;
`

export const Nome = styled.h3`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: bold;
  color: #e66767;
`

export const Preco = styled.p`
  margin: 0;
  font-size: 14px;
  color: #e66767;
`

export const Remover = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #e66767;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const Total = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 16px 0 0;
  text-align: right;
  color: #fff;
  font-family: 'Roboto', sans-serif;
`

export const Botao = styled.button`
  background-color: #fff;
  color: #e66767;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;
  transition: 0.2s ease;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #f4f4f4;
  }
`

export const Vazio = styled.p`
  text-align: center;
  font-size: 14px;
  color: #fff;
  margin-top: 32px;
  font-family: 'Roboto', sans-serif;
`
