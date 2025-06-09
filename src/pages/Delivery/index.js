import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import { Form, Input, Button } from './styles'

const Delivery = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.items)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/pagamento')
  }

  return (
    <CheckoutSidebar>
      <h2>Entrega</h2>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="CEP" required />
        <Input placeholder="Rua" required />
        <Input placeholder="Número" required />
        <Input placeholder="Complemento" />
        <Input placeholder="Cidade" required />
        <Input placeholder="UF" required />
        <Button type="submit">Continuar com a entrega</Button>
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

export default Delivery
