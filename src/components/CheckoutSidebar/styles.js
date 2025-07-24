import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`

export const SidebarContainer = styled.aside`
  width: 360px;
  height: 100%;
  background-color: #e66767;
  padding: 32px 24px;
  overflow-y: auto;
  font-family: 'Roboto', sans-serif;
  color: #fff;

  /* Scrollbar opcional customizada */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff60;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`