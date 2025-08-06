import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #e66767;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`

export const Imagem = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Tag = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 4px;
`

export const Conteudo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TituloArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #e66767;
  margin: 0;
`

export const Nota = styled.span`
  font-size: 14px;
  color: #000;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: #e66767;
  margin-bottom: 16px;
  line-height: 1.4;
`

export const Botao = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
  align-self: flex-start;
  transition: background 0.3s ease;

  &:hover {
    background-color: #cc5555;
  }
`
