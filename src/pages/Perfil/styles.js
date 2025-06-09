
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 16px;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`

export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
`

export const Card = styled.li`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`

export const Imagem = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

export const Conteudo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`

export const Nome = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`

export const Botao = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cf5a5a;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ModalContent = styled.div`
  background-color: #fff;
  max-width: 800px;
  width: 100%;
  padding: 32px;
  border-radius: 8px;
  position: relative;
`

export const ModalClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`
