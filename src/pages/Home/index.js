import { Link } from 'react-router-dom'
import restaurantes from '../../mock/restaurantes'
import { Container, Lista, Item } from './styles'

function Home() {
  return (
    <Container>
      <h1>Restaurantes</h1>
      <Lista>
        {restaurantes.map((restaurante) => (
          <Item key={restaurante.id}>
            <img src={restaurante.capa} alt={restaurante.nome} />
            <h2>{restaurante.nome}</h2>
            <p>{restaurante.tipo}</p>
            <Link to={`/perfil/${restaurante.id}`}>Saiba mais</Link>
          </Item>
        ))}
      </Lista>
    </Container>
  )
}

export default Home


