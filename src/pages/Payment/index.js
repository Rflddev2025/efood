import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import { Form, Input, Button } from './styles'

const Payment = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.items)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/confirmacao')
  }

  return (
    <CheckoutSidebar>
      <h2>Pagamento</h2>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Nome no cartão" required />
        <Input placeholder="Número do cartão" required />
        <Input placeholder="Validade" required />
        <Input placeholder="CVV" required />
        <Button type="submit">Finalizar pagamento</Button>
      </Form>
      <h3>Resumo do Pedido</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </CheckoutSidebar>
  )
}

export default Payment
