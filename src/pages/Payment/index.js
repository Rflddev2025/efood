import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  salvarPagamento,
  salvarOrderId
} from '../../store/reducers/cart'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import {
  Form,
  CampoComLabel,
  LinhaDupla,
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
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

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

    if (!nome || !mes || !ano) {
      alert('Preencha todos os campos obrigatórios.')
      return
    }

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

    dispatch(
      salvarPagamento({
        nome,
        numero,
        codigo,
        vencimento: `${mes}/${ano}`
      })
    )

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
      const response = await fetch(
        'https://ebac-fake-api.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dadosPedido)
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao finalizar o pedido.')
      }

      const resposta = await response.json()

      dispatch(salvarOrderId(resposta.orderId))

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
        <CampoComLabel>
          <label htmlFor="nome">Nome no cartão</label>
          <Input
            id="nome"
            placeholder="Nome no cartão"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </CampoComLabel>

        <LinhaDupla>
          <CampoComLabel>
            <label htmlFor="numero">Número do cartão</label>
            <MaskedInput
              id="numero"
              mask="0000000000000000"
              value={numero}
              onChange={(e) => setNumero(e.target.value.replace(/\D/g, ''))}
              placeholder="Número"
              required
            />
          </CampoComLabel>

          <CampoComLabel>
            <label htmlFor="codigo">CVV</label>
            <MaskedInput
              id="codigo"
              mask="000"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value.replace(/\D/g, ''))}
              placeholder="CVV"
              required
            />
          </CampoComLabel>
        </LinhaDupla>

        <LinhaDupla>
          <CampoComLabel>
            <label htmlFor="mes">Mês de vencimento</label>
            <MaskedInput
              id="mes"
              mask="00"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              placeholder="MM"
              required
            />
          </CampoComLabel>

          <CampoComLabel>
            <label htmlFor="ano">Ano de vencimento</label>
            <MaskedInput
              id="ano"
              mask="00"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              placeholder="AA"
              required
            />
          </CampoComLabel>
        </LinhaDupla>

        <Button type="submit">Finalizar pagamento</Button>
        <Button type="button" onClick={() => navigate('/entrega')}>
          Voltar para adição de endereço
        </Button>
      </Form>

      <PedidoTitulo>Resumo do pedido</PedidoTitulo>
      <PedidoLista>
        {cart.map((item) => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco.toFixed(2).replace('.', ',')}
          </li>
        ))}
      </PedidoLista>
    </CheckoutSidebar>
  )
}

export default Payment
