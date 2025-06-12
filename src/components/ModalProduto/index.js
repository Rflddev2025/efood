import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../../store/reducers/cart'
import { Modal, Overlay, Conteudo, Imagem, Titulo, Descricao, Botao } from './styles'

const ModalProduto = ({ produto, onClose }) => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(adicionarAoCarrinho(produto))
    onClose()
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Imagem src={produto.foto} alt={produto.nome} />
        <Conteudo>
          <Titulo>{produto.nome}</Titulo>
          <Descricao>{produto.descricao}</Descricao>
          <Botao onClick={handleAdd}>Adicionar ao carrinho</Botao>
        </Conteudo>
      </Modal>
    </Overlay>
  )
}

export default ModalProduto
