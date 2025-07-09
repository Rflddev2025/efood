import { useEffect } from 'react'
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Imagem,
  Titulo,
  Descricao,
  Ingredientes,
  BotaoAdicionar,
  Conteudo
} from './styles'

const Modal = ({ prato, onClose, onAdd }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!prato) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Imagem src={prato.foto} alt={prato.nome} />

        <Conteudo>
          <Titulo>{prato.nome}</Titulo>
          <Descricao>{prato.descricao}</Descricao>

          <h4>Ingredientes</h4>
          <Ingredientes>
            {prato.ingredientes?.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </Ingredientes>

          <BotaoAdicionar type="button" onClick={onAdd}>
            Adicionar ao carrinho — R$ {Number(prato.preco).toFixed(2).replace('.', ',')}
          </BotaoAdicionar>
        </Conteudo>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal


