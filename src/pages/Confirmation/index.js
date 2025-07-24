import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import { Titulo, Paragrafo, Botao, Box } from './styles'

const Confirmation = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const handleVoltar = () => {
    navigate('/')
  }

  return (
    <CheckoutSidebar>
      <Box>
        <Titulo>Pedido realizado!</Titulo>

        <Paragrafo>
          Número do pedido: <strong>{cart.orderId || '---'}</strong>
        </Paragrafo>

        <Paragrafo>
          Pedido enviado para entrega no endereço:
        </Paragrafo>

        <Paragrafo>
          {cart.entrega?.endereco}, nº {cart.entrega?.numero} –{' '}
          {cart.entrega?.cidade} / {cart.entrega?.cep}
        </Paragrafo>

        {cart.entrega?.complemento && (
          <Paragrafo>Complemento: {cart.entrega.complemento}</Paragrafo>
        )}

        <Paragrafo>Recebedor: {cart.entrega?.nome}</Paragrafo>

        <Paragrafo>
          Pagamento via cartão final{' '}
          {cart.pagamento?.card?.number?.slice(-4)}
        </Paragrafo>

        <Paragrafo>
          Em breve você receberá a confirmação no seu e-mail.
        </Paragrafo>

        <Botao onClick={handleVoltar}>Concluir</Botao>
      </Box>
    </CheckoutSidebar>
  )
}

export default Confirmation
