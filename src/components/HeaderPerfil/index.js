import {
  Container,
  Wrapper,
  LogoContainer,
  BotaoHeader,
  CarrinhoButton
} from './styles'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { useSelector, useDispatch } from 'react-redux'
import { mostrarCarrinho } from '../../store/reducers/cart'

const HeaderPerfil = () => {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleCartClick = () => {
    dispatch(mostrarCarrinho()) 
  }

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <BotaoHeader>Restaurantes</BotaoHeader>
        </Link>

        <LogoContainer>
          <Logo />
        </LogoContainer>

        <CarrinhoButton onClick={handleCartClick}>
          {cart.length} produto(s) no carrinho
        </CarrinhoButton>
      </Wrapper>
    </Container>
  )
}

export default HeaderPerfil




