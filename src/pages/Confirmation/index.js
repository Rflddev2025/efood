import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import { Titulo, Paragrafo, Botao } from './styles'
import { limparCarrinho } from '../../store/reducers/cart'

const Confirmation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBackToHome = () => {
    dispatch(limparCarrinho())
    navigate('/')
  }

  return (
    <CheckoutSidebar>
      <Titulo>Pedido Realizado!</Titulo>
      <Paragrafo>
        Em breve você receberá a confirmação do pagamento no seu e-mail.
      </Paragrafo>
      <Paragrafo>
        Agora é só aguardar que a sua comida chegará o quanto antes!
      </Paragrafo>
      <Botao onClick={handleBackToHome}>Voltar para a Home</Botao>
    </CheckoutSidebar>
  )
}

export default Confirmation



