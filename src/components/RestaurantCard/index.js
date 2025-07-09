import { Link } from 'react-router-dom'
import {
  Card,
  Imagem,
  Conteudo,
  TituloArea,
  Titulo,
  Nota,
  Descricao,
  Botao,
  Tag
} from './styles'

const RestaurantCard = ({ restaurante }) => {
  return (
    <Card>
      <Imagem style={{ backgroundImage: `url(${restaurante.foto})` }}>
        <Tag>{restaurante.tipo}</Tag>
      </Imagem>

      <Conteudo>
        <TituloArea>
          <Titulo>{restaurante.nome}</Titulo>
          <Nota>
            {restaurante.avaliacao.toFixed(1)} <span>⭐</span>
          </Nota>
        </TituloArea>

        <Descricao>{restaurante.descricao}</Descricao>

        <Link to={`/perfil/${restaurante.id}`}>
          <Botao>Saiba mais</Botao>
        </Link>
      </Conteudo>
    </Card>
  )
}

export default RestaurantCard


