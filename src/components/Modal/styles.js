import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

export const ModalContainer = styled.div`
  background-color: #e66767;
  border-radius: 8px;
  width: 100%;
  max-width: 880px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 24px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 28px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`

export const Imagem = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const Titulo = styled.h2`
  font-size: 28px;
  color: #fff;
  margin: 0 0 16px;
`

export const Descricao = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 16px;
`

export const Ingredientes = styled.ul`
  padding-left: 20px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 24px;

  li {
    margin-bottom: 4px;
  }
`

export const BotaoAdicionar = styled.button`
  background-color: #fff;
  color: #e66767;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #f4f4f4;
  }
`

export const Conteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

