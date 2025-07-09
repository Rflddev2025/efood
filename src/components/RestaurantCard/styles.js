import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Imagem = styled.div`
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Tag = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
`

export const Conteudo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

export const TituloArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: #000;
  flex: 1;
`

export const Botao = styled.button`
  margin-top: 8px;
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
`
