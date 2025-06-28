import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { salvarEntrega } from '../../store/reducers/cart'
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

const Delivery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)

  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      salvarEntrega({
        nome: 'Cliente',
        endereco: rua,
        cidade,
        cep,
        numero,
        complemento
      })
    )

    navigate('/pagamento')
  }

  return (
    <CheckoutSidebar>
      <Titulo>Entrega</Titulo>

      <Form onSubmit={handleSubmit}>
        <Input placeholder="CEP" required value={cep} onChange={(e) => setCep(e.target.value)} />
        <Input placeholder="Rua" required value={rua} onChange={(e) => setRua(e.target.value)} />
        <Input placeholder="Número" required value={numero} onChange={(e) => setNumero(e.target.value)} />
        <Input placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
        <Input placeholder="Cidade" required value={cidade} onChange={(e) => setCidade(e.target.value)} />
        <Input placeholder="UF" required value={uf} onChange={(e) => setUf(e.target.value)} />
        <Button type="submit">Continuar com o pagamento</Button>
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

export default Delivery



