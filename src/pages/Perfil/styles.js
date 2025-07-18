import styled from 'styled-components'

export const Banner = styled.div`
  height: 280px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`

export const OverlayBanner = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: relative;
`

export const TopoInfo = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
`

export const BaseInfo = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
`

export const TagBanner = styled.span`
  color: white;
  font-size: 32px;
  padding: 4px 16px;
  border-radius: 8px;
  text-transform: capitalize;
`

export const TituloBanner = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`

export const Container = styled.main`
  background-color: #fff8f2;
  padding: 80px 0;
  min-height: 100vh;
`

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`

export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 40px 0 80px 0;

  li {
    height: 100%;
    display: flex;
  }
`


