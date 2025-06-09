import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: #fff;
  padding: 32px 16px;
  z-index: 11;
  overflow-y: auto;
`

const CheckoutSidebar = ({ children }) => (
  <Overlay>
    <SidebarContainer>{children}</SidebarContainer>
  </Overlay>
)

export default CheckoutSidebar

