import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { salvarPagamento, limparCarrinho } from '../../store/reducers/cart'
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
  const entrega = useSelector((state) => state.cart.entrega)

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [codigo, setCodigo] = useState('')
  const [vencimento, setVencimento] = useState('')

  const handleSubmit = async (e) => {
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

    const [mes, ano] = vencimento.split('/')

    const dadosCartao = {
      card: {
        name: nome,
        number: numero,
        code: Number(codigo),
        expires: {
          month: Number(mes),
          year: Number(`20${ano}`)
        }
      }
    }

    dispatch(salvarPagamento({ nome, numero, codigo, vencimento }))

    const dadosPedido = {
      products: cart.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: entrega.nome,
        address: {
          description: entrega.endereco,
          city: entrega.cidade,
          zipCode: entrega.cep,
          number: Number(entrega.numero),
          complement: entrega.complemento
        }
      },
      payment: dadosCartao
    }

    try {
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosPedido)
      })

      if (!response.ok) {
        throw new Error('Erro ao finalizar o pedido.')
      }

      dispatch(limparCarrinho())
      navigate('/confirmacao')
    } catch (error) {
      alert('Ocorreu um erro ao enviar o pedido. Tente novamente.')
      console.error(error)
    }
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
          mask="0000000000000000"
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
