import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalContainer = styled.div`
  background: #fff;
  flex: 1;
  border-radius: 8px;
  padding: 32px;
  position: relative;
  max-width: 800px; width: 100%;
`


export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
`

export const Imagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

export const Titulo = styled.h2`
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
`

export const Descricao = styled.p`
  margin-top: 8px;
  font-size: 16px;
`

export const Ingredientes = styled.ul`
  margin: 16px 0;
  padding-left: 20px;
  list-style: disc;

  li {
    margin-bottom: 4px;
  }
`

export const BotaoAdicionar = styled.button`
  background-color: #e66767;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
`
export const ModalContentArea = styled.div`
  display: flex;
  gap: 32px;
  background-color: transparent;
  max-width: 1200px;
  width: 100%;
`

export const CarrinhoContainer = styled.aside`
  width: 360px;
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 80vh;
`




