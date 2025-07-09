import { Overlay, SidebarContainer } from './styles'

const CheckoutSidebar = ({ children }) => (
  <Overlay>
    <SidebarContainer>{children}</SidebarContainer>
  </Overlay>
)

export default CheckoutSidebar

