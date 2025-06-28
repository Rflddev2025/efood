import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 472px;
  position: relative;
  margin-bottom: 32px;
`

export const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

export const Tag = styled.span`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 4px;
  text-transform: uppercase;
`

export const Infos = styled.div`
  padding: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: #4B4B4B;
  margin-bottom: 16px;
  line-height: 22px;
`

export const Nota = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #e66767;
`

export const Estrela = styled.span`
  margin-left: 4px;
`

export const Botao = styled.button`
  background-color:#e66767 ;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc4f4f;
  }
`
export const BotaoLink = styled(Link)`
  background-color: #e66767;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ##e66767;
  }
`