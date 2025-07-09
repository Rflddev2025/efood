import {
  Modal,
  Overlay,
  Conteudo,
  Imagem,
  Titulo,
  Descricao,
  Botao
} from './styles'

const ModalProduto = ({ produto, onClose, onAdd }) => {
  const handleAdd = () => {
    onAdd()      
    onClose()    
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Imagem src={produto.foto} alt={produto.nome} />
        <Conteudo>
          <Titulo>{produto.nome}</Titulo>
          <Descricao>{produto.descricao}</Descricao>
          <Botao onClick={handleAdd}>
            Adicionar ao carrinho — R$ {Number(produto.preco).toFixed(2).replace('.', ',')}
          </Botao>
        </Conteudo>
      </Modal>
    </Overlay>
  )
}

export default ModalProduto


