import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, fecharCarrinho } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import * as S from './styles'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  const visivel = useSelector((state) => state.cart.visivel)
  const dispatch = useDispatch()

  const getTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.preco * item.quantidade, 0)
      .toFixed(2)
      .replace('.', ',')
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
                  <S.Info>
                    <div>
                      <S.Nome>{item.nome}</S.Nome>
                    </div>
                    <div>
                      <S.Preco>
                        R${' '}
                        {(item.preco * item.quantidade)
                          .toFixed(2)
                          .replace('.', ',')}
                        {item.quantidade > 1 && ` (${item.quantidade}x)`}
                      </S.Preco>
                    </div>
                  </S.Info>
                  <S.Remover onClick={() => dispatch(removeFromCart(item.id))}>
                    <Trash2 size={18} />
                  </S.Remover>
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




