import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, fecharCarrinho } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'
import * as S from './styles'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  const visivel = useSelector((state) => state.cart.visivel)
  const dispatch = useDispatch()

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.preco, 0).toFixed(2)
  }

  if (!visivel) return null

  return (
    <S.Overlay>
      <S.Sidebar>
        <S.Fechar onClick={() => dispatch(fecharCarrinho())}>×</S.Fechar>
        <S.Titulo>Carrinho</S.Titulo>

        {cart.length === 0 ? (
          <S.Vazio>Seu carrinho está vazio.</S.Vazio>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <S.Item key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>R$ {item.preco.toFixed(2)}</p>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      Remover
                    </button>
                  </div>
                </S.Item>
              ))}
            </ul>

            <S.Total>Total: R$ {getTotal()}</S.Total>

            <Link to="/entrega">
              <S.Botao>Continuar com a entrega</S.Botao>
            </Link>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart







