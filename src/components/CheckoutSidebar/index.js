import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  justify-content: flex-end;
`

const SidebarContainer = styled.div`
  width: 360px;
  height: 100%;
  background-color: #e66767;
  padding: 32px 16px;
  overflow-y: auto;
  font-family: 'Roboto', sans-serif;
`

const CheckoutSidebar = ({ children }) => (
  <Overlay>
    <SidebarContainer>{children}</SidebarContainer>
  </Overlay>
)

export default CheckoutSidebar

