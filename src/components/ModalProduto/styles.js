import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 999;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  background-color: #e66767;
  border-radius: 8px;
  max-width: 1024px;
  width: 100%;
  display: flex;
  color: #fff;
  padding: 32px;
  gap: 24px;
`

export const Imagem = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 8px;
  object-fit: cover;
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin: 16px 0;
  line-height: 1.4;
`

export const Botao = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  font-weight: bold;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  max-width: 220px;
`

