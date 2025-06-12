import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Container,
  Titulo,
  ListaPratos,
  Card,
  Imagem,
  Conteudo,
  Nome,
  Descricao,
  Botao
} from './styles'

import Modal from '../../components/Modal'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState(null)
  const [modalAtivo, setModalAtivo] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
      .catch(() => setRestaurante(null))
  }, [id])

  const abrirModal = (prato) => {
    setPratoSelecionado(prato)
    setModalAtivo(true)
  }

  const fecharModal = () => {
    setPratoSelecionado(null)
    setModalAtivo(false)
  }

  if (!restaurante) return <p>Carregando...</p>

  return (
    <Container>
      <Titulo>{restaurante.titulo}</Titulo>

      <ListaPratos>
        {restaurante.cardapio.map((prato) => (
          <Card key={prato.id}>
            <Imagem src={prato.foto} alt={prato.nome} />
            <Conteudo>
              <Nome>{prato.nome}</Nome>
              <Descricao>{prato.descricao}</Descricao>
              <Botao onClick={() => abrirModal(prato)}>Mais detalhes</Botao>
            </Conteudo>
          </Card>
        ))}
      </ListaPratos>

      {modalAtivo && pratoSelecionado && (
        <>
          <Modal prato={pratoSelecionado} onClose={fecharModal} />
          <Cart />
        </>
      )}
    </Container>
  )
}

export default Perfil

