import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #E66767;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`

export const Tag = styled.span`
  background-color: #E66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 4px;
`

export const Infos = styled.div`
  padding: 16px;
`

export const Titulo = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 12px;
`

export const Descricao = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
`

export const Nota = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #E66767;
`

export const Estrela = styled.span`
  margin-left: 4px;
`

export const Botao = styled.button`
  background-color: #E66767;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc4f4f;
  }
`
