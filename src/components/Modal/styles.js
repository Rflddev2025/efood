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
  border-radius: 8px;
  padding: 32px;
  position: relative;
  max-width: 880px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  height: 280px; 
  object-fit: cover;
  border-radius: 8px;
`

export const Titulo = styled.h2`
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
`

export const Descricao = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`

export const Ingredientes = styled.ul`
  margin: 24px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  li {
    background-color: #eee;
    padding: 8px 12px;
    border-radius: 16px;
    font-size: 14px;
    color: #333;
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




