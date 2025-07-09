import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRestaurantePorId } from '../../services/api'

import {
  Banner,
  OverlayBanner,
  TagBanner,
  TituloBanner,
  Container,
  Wrapper,
  ListaPratos,
  TopoInfo,
  BaseInfo
} from './styles'

import PratoCard from '../../components/PratoCard'
import ModalProduto from '../../components/ModalProduto'
import Cart from '../../components/Cart'
import { adicionar } from '../../store/reducers/cart'

const Perfil = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [restaurante, setRestaurante] = useState({
    id: 0,
    titulo: '',
    tipo: '',
    capa: '',
    cardapio: []
  })

  const [pratoSelecionado, setPratoSelecionado] = useState(null)

  useEffect(() => {
    getRestaurantePorId(Number(id)).then((res) => {
      if (res && Array.isArray(res.cardapio)) {
        setRestaurante(res)
      } else {
        setRestaurante({ ...res, cardapio: [] })
      }
    })
  }, [id])

  const handleAdicionarAoCarrinho = (produto) => {
    dispatch(
      adicionar({
        id: produto.id,
        nome: produto.nome,
        foto: produto.foto,
        preco: produto.preco
      })
    )
    setPratoSelecionado(null) // fecha o modal após adicionar
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <OverlayBanner>
          <TopoInfo>
            <TagBanner>{restaurante.tipo}</TagBanner>
          </TopoInfo>
          <BaseInfo>
            <TituloBanner>{restaurante.titulo}</TituloBanner>
          </BaseInfo>
        </OverlayBanner>
      </Banner>

      <Container>
        <Wrapper>
          <ListaPratos>
            {restaurante.cardapio.map((prato) => (
              <li key={prato.id}>
                <PratoCard
                  prato={prato}
                  aoClicar={() => setPratoSelecionado(prato)}
                />
              </li>
            ))}
          </ListaPratos>
        </Wrapper>
      </Container>

      {pratoSelecionado && (
        <ModalProduto
          produto={pratoSelecionado}
          onClose={() => setPratoSelecionado(null)}
          onAdd={() => handleAdicionarAoCarrinho(pratoSelecionado)}
        />
      )}

      <Cart />
    </>
  )
}

export default Perfil


