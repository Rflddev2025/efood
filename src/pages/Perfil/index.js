import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Container,
  ListaPratos,
  Card,
  Imagem,
  Conteudo,
  Nome,
  Descricao,
  Botao,
  Banner,
  OverlayBanner,
  TagBanner,
  TituloBanner,
  Wrapper
} from './styles'

import Modal from '../../components/Modal'
import Cart from '../../components/Cart'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/cart'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState(null)
  const [modalAtivo, setModalAtivo] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
      .catch(() => setRestaurante(null))
  }, [id])

  useEffect(() => {
    document.body.style.overflow = modalAtivo ? 'hidden' : 'auto'
  }, [modalAtivo])

  const abrirModal = (prato) => {
    setPratoSelecionado(prato)
    setModalAtivo(true)
  }

  const fecharModal = () => {
    setModalAtivo(false)
  }

  const adicionarAoCarrinho = (prato) => {
    dispatch(adicionar(prato))
    setCartOpen(true)
    setModalAtivo(false)
  }

  if (!restaurante) return <p>Carregando...</p>

  return (
    <>
      <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <OverlayBanner>
          <TagBanner>{restaurante.tipo}</TagBanner>
          <TituloBanner>{restaurante.titulo}</TituloBanner>
        </OverlayBanner>
      </Banner>

      <Container>
        <Wrapper>
          <ListaPratos>
            {restaurante.cardapio.map((prato) => (
              <Card key={prato.id}>
                <Imagem src={prato.foto} alt={prato.nome} />
                <Conteudo>
                  <Nome>{prato.nome}</Nome>
                  <Descricao>{prato.descricao}</Descricao>
                  <Botao onClick={() => abrirModal(prato)}>
                    Mais detalhes
                  </Botao>
                </Conteudo>
              </Card>
            ))}
          </ListaPratos>
        </Wrapper>
      </Container>

      {modalAtivo && pratoSelecionado && (
        <Modal
          prato={pratoSelecionado}
          onClose={fecharModal}
          onAdd={() => adicionarAoCarrinho(pratoSelecionado)}
        />
      )}

      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </>
  )
}

export default Perfil

