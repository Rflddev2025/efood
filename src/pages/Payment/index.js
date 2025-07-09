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
import MaskedInput from '../../components/MaskedInput'

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

    
    if (numero.length !== 16) {
      alert('O número do cartão deve conter 16 dígitos.')
      return
    }

    if (codigo.length !== 3) {
      alert('O código de segurança (CVV) deve conter 3 dígitos.')
      return
    }

    if (!nome || !vencimento) {
      alert('Preencha todos os campos obrigatórios.')
      return
    }

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
        <Input
          placeholder="Nome no cartão"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <MaskedInput
          mask="0000 0000 0000 0000"
          value={numero}
          onChange={(e) =>
            setNumero(e.target.value.replace(/\D/g, '')) 
          }
          placeholder="Número do cartão"
          required
        />

        <MaskedInput
          mask="000"
          value={codigo}
          onChange={(e) =>
            setCodigo(e.target.value.replace(/\D/g, ''))
          }
          placeholder="CVV"
          required
        />

        <MaskedInput
          mask="00/00"
          value={vencimento}
          onChange={(e) => setVencimento(e.target.value)}
          placeholder="Validade (MM/AA)"
          required
        />

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
