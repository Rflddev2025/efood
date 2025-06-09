import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/cart'
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Imagem,
  Titulo,
  Descricao,
  Ingredientes,
  BotaoAdicionar
} from './styles'

const Modal = ({ prato, onClose }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!prato) return null

const handleAddToCart = (e) => {
  e.preventDefault()

  dispatch(
    adicionar({
      id: prato.id,
      nome: prato.nome,
      foto: prato.imagem,
      preco: 40
    })
  )

  
}



  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Imagem src={prato.imagem} alt={prato.nome} />
        <Titulo>{prato.nome}</Titulo>
        <Descricao>{prato.descricao}</Descricao>
        <h4>Ingredientes</h4>
        <Ingredientes>
          <li>Tomate</li>
          <li>Muçarela</li>
          <li>Manjericão</li>
        </Ingredientes>
        <BotaoAdicionar type="button" onClick={handleAddToCart}>
        Adicionar ao carrinho — R$ 40,00
        </BotaoAdicionar>


      </ModalContainer>
    </Overlay>
  )
}

export default Modal

