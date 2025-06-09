import { useParams } from 'react-router-dom'
import { useState } from 'react'
import restaurantes from '../../mock/restaurantes'
import { Container } from './styles'
import Modal from '../../components/Modal'
import Cart from '../../components/Cart'

function Perfil() {
  const { id } = useParams()
  const restaurante = restaurantes.find((r) => r.id === id)

  const [modalAtivo, setModalAtivo] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState(null)

  const abrirModal = (prato) => {
    setPratoSelecionado(prato)
    setModalAtivo(true)
  }

  const fecharModal = () => {
    setModalAtivo(false)
    setPratoSelecionado(null)
  }

  if (!restaurante) return <p>Restaurante não encontrado.</p>

  return (
    <>
      <Container>
        <h1>{restaurante.nome}</h1>
        <ul>
          {restaurante.pratos.map((prato) => (
            <li key={prato.id}>
              <img src={prato.imagem} alt={prato.nome} />
              <h2>{prato.nome}</h2>
              <p>{prato.descricao}</p>
              <button onClick={() => abrirModal(prato)}>Ver detalhes</button>
            </li>
          ))}
        </ul>

        {modalAtivo && pratoSelecionado && (
          <>
            <Modal prato={pratoSelecionado} onClose={fecharModal} />
            <Cart /> {}
          </>
        )}
      </Container>
    </>
  )
}

export default Perfil

