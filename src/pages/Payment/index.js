import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { salvarPagamento } from '../../store/reducers/cart'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import {
  Form,
  Input,
  Button,
  PedidoTitulo,
  PedidoLista,
  Titulo
} from './styles'
import { useState } from 'react'

const Payment = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [codigo, setCodigo] = useState('')
  const [vencimento, setVencimento] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      salvarPagamento({
        nome,
        numero,
        codigo,
        vencimento
      })
    )

    navigate('/confirmacao')
  }

  return (
    <CheckoutSidebar>
      <Titulo>Pagamento</Titulo>

      <Form onSubmit={handleSubmit}>
        <Input placeholder="Nome no cartão" required value={nome} onChange={(e) => setNome(e.target.value)} />
        <Input placeholder="Número do cartão" required value={numero} onChange={(e) => setNumero(e.target.value)} />
        <Input placeholder="CVV" required value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        <Input placeholder="Validade" required value={vencimento} onChange={(e) => setVencimento(e.target.value)} />
        <Button type="submit">Finalizar pagamento</Button>
      </Form>

      <PedidoTitulo>Resumo do pedido</PedidoTitulo>
      <PedidoLista>
        {cart.map((item) => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco.toFixed(2)}
          </li>
        ))}
      </PedidoLista>
    </CheckoutSidebar>
  )
}

export default Payment




