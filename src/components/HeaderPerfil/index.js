import { Container, Wrapper, LogoContainer, BotaoHeader, CarrinhoButton } from './styles'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { useSelector } from 'react-redux'

const HeaderPerfil = ({ onCartClick }) => {
  const cart = useSelector((state) => state.cart.items)

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <BotaoHeader>Restaurantes</BotaoHeader>
        </Link>

        <LogoContainer>
          <Logo />
        </LogoContainer>

        <CarrinhoButton onClick={onCartClick}>
          {cart.length} produto(s) no carrinho
        </CarrinhoButton>
      </Wrapper>
    </Container>
  )
}

export default HeaderPerfil

