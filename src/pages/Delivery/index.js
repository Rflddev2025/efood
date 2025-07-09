import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { salvarEntrega } from '../../store/reducers/cart'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import {
  Form,
  Input,
  Button,
  Titulo
} from './styles'
import { useState } from 'react'
import MaskedInput from '../../components/MaskedInput'

const Delivery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const cepLimpo = cep.replace(/\D/g, '')
    const numeroLimpo = numero.replace(/\D/g, '')

    if (!nome || !endereco || !cidade || cepLimpo.length !== 8 || !numeroLimpo) {
      alert('Preencha todos os campos obrigatórios corretamente.')
      return
    }

    dispatch(
      salvarEntrega({
        nome,
        endereco,
        cidade,
        cep: cepLimpo,
        numero: numeroLimpo,
        complemento
      })
    )

    navigate('/pagamento')
  }

  return (
    <CheckoutSidebar>
      <Titulo>Entrega</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Nome completo"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Input
          placeholder="Endereço"
          required
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />

        <Input
          placeholder="Cidade"
          required
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <MaskedInput
          mask="00000-000"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="CEP"
          required
        />

        <MaskedInput
          mask="000000" 
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Número"
          required
        />

        <Input
          placeholder="Complemento (opcional)"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />

        <Button type="submit">Continuar com o pagamento</Button>
      </Form>
    </CheckoutSidebar>
  )
}

export default Delivery
