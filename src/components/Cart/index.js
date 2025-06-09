import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'
import * as S from './styles'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  console.log('Carrinho atualizado:', cart)
  const dispatch = useDispatch()

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.preco, 0).toFixed(2)
  }

  return (
    <S.Sidebar>
      <S.Titulo>Carrinho</S.Titulo>
      <ul>
        {cart.map((item) => (
          <S.Item key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <p>R$ {item.preco.toFixed(2)}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
            </div>
          </S.Item>
        ))}
      </ul>
      <S.Total>Total: R$ {getTotal()}</S.Total>
      <Link to="/entrega">
        <S.Botao>Continuar com a entrega</S.Botao>
      </Link>
    </S.Sidebar>
  )
}

export default Cart
