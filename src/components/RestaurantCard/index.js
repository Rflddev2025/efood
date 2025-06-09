import {
  Card,
  Img,
  Infos,
  Tag,
  Titulo,
  Descricao,
  Nota,
  Estrela,
  Botao
} from './styles'

const RestaurantCard = ({ restaurante }) => {
  return (
    <Card>
      <Img src={restaurante.foto} alt={restaurante.nome} />
      <Tag>{restaurante.tipo}</Tag>
      <Infos>
        <Titulo>{restaurante.nome}</Titulo>
        <Descricao>{restaurante.descricao}</Descricao>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Nota>
            {restaurante.avaliacao.toFixed(1)} <Estrela>⭐</Estrela>
          </Nota>
          <Botao>Saiba mais</Botao>
        </div>
      </Infos>
    </Card>
  )
}

export default RestaurantCard