import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { salvarEntrega } from '../../store/reducers/cart'
import CheckoutSidebar from '../../components/CheckoutSidebar'
import {
  Form,
  InputGroup,
  Label,
  Input,
  Row,
  Button,
  VoltarBotao,
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
        numero: Number(numeroLimpo),
        complemento
      })
    )

    navigate('/pagamento')
  }

  return (
    <CheckoutSidebar>
      <Titulo>Entrega</Titulo>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="nome">Quem irá receber</Label>
          <Input
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="endereco">Endereço</Label>
          <Input
            id="endereco"
            required
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="cidade">Cidade</Label>
          <Input
            id="cidade"
            required
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </InputGroup>

        <Row>
          <InputGroup style={{ flex: 1 }}>
            <Label htmlFor="cep">CEP</Label>
            <MaskedInput
              id="cep"
              mask="00000-000"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup style={{ flex: 1, marginLeft: 8 }}>
            <Label htmlFor="numero">Número</Label>
            <MaskedInput
              id="numero"
              mask="000000"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label htmlFor="complemento">Complemento (opcional)</Label>
          <Input
            id="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </InputGroup>

        <Button type="submit">Continuar com o pagamento</Button>
        <VoltarBotao type="button" onClick={() => navigate(-1)}>
          Voltar para o carrinho
        </VoltarBotao>
      </Form>
    </CheckoutSidebar>
  )
}

export default Delivery

