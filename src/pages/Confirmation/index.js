import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import { Titulo, Paragrafo, Botao, Box } from './styles'
import { limparCarrinho } from '../../store/reducers/cart'

const Confirmation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    const enviarPedido = async () => {
      
      if (
        !cart?.entrega?.nome ||
        !cart?.entrega?.endereco ||
        !cart?.pagamento?.numero ||
        cart.items.length === 0
      ) {
        console.error('Dados incompletos para envio do pedido:', cart)
        setErro(true)
        return
      }

      const dadosPedido = {
        produtos: cart.items.map((item) => ({
          id: item.id,
          preco: item.preco
        })),
        entrega: {
          recebedor: cart.entrega.nome,
          endereco: {
            descricao: cart.entrega.endereco,
            cidade: cart.entrega.cidade,
            cep: cart.entrega.cep.replace(/\D/g, ''),
            numero: cart.entrega.numero,
            complemento: cart.entrega.complemento || ''
          }
        },
        pagamento: {
          numero: cart.pagamento.numero.replace(/\s/g, ''),
          nome: cart.pagamento.nome,
          vencimento: cart.pagamento.vencimento,
          codigo: cart.pagamento.codigo
        }
      }

      try {
        const resposta = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dadosPedido)
        })

        const dadosResposta = await resposta.json()
        console.log('Resposta da API:', dadosResposta)

        if (resposta.ok) {
          setCarregando(false)
          dispatch(limparCarrinho())
        } else {
          console.error('Erro da API:', dadosResposta)
          setErro(true)
        }
      } catch (erro) {
        console.error('Erro ao confirmar pedido:', erro)
        setErro(true)
      }
    }

    enviarPedido()
  }, [dispatch, cart])

  const handleBackToHome = () => {
    navigate('/')
  }

  if (carregando) {
    return (
      <CheckoutSidebar>
        <Box>
          <Titulo>Confirmando seu pedido...</Titulo>
          <Paragrafo>Aguarde um instante enquanto processamos.</Paragrafo>
        </Box>
      </CheckoutSidebar>
    )
  }

  if (erro) {
    return (
      <CheckoutSidebar>
        <Box>
          <Titulo>Erro ao confirmar pedido</Titulo>
          <Paragrafo>Não foi possível processar seu pedido. Tente novamente.</Paragrafo>
          <Botao onClick={handleBackToHome}>Voltar para a Home</Botao>
        </Box>
      </CheckoutSidebar>
    )
  }

  return (
    <CheckoutSidebar>
      <Box>
        <Titulo>Pedido realizado!</Titulo>
        <Paragrafo>Pedido enviado para entrega no endereço:</Paragrafo>
        <Paragrafo>
          {cart.entrega.endereco}, nº {cart.entrega.numero} – {cart.entrega.cidade} / {cart.entrega.cep}
        </Paragrafo>
        {cart.entrega.complemento && (
          <Paragrafo>Complemento: {cart.entrega.complemento}</Paragrafo>
        )}
        <Paragrafo>Recebedor: {cart.entrega.nome}</Paragrafo>
        <Paragrafo>
          Pagamento via cartão final {cart.pagamento.numero?.replace(/\s/g, '').slice(-4)}
        </Paragrafo>
        <Paragrafo>Em breve você receberá a confirmação no seu e-mail.</Paragrafo>
        <Botao onClick={handleBackToHome}>Voltar para a Home</Botao>
      </Box>
    </CheckoutSidebar>
  )
}

export default Confirmation

