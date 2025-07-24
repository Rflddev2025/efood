import * as S from './styles'

const CheckoutSidebar = ({ children }) => {
  return (
    <S.Overlay>
      <S.SidebarContainer>{children}</S.SidebarContainer>
    </S.Overlay>
  )
}

export default CheckoutSidebar
