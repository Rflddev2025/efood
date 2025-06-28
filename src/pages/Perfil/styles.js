import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  border: none;
  margin: 0;
  padding: 0;
`

export const OverlayBanner = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
`

export const TagBanner = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
  text-transform: uppercase;
`

export const TituloBanner = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`

export const Container = styled.div`
  padding: 32px 40px;
  width: 100%;
  background-color: #FFF8F2;
  min-height: 100vh;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Card = styled.li`
  background-color: #FFEBD9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const Conteudo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px;
  color: #000;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: #4B4B4B;
  flex-grow: 1;
  margin-bottom: 16px;
`

export const Botao = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc5555;
  }
`

