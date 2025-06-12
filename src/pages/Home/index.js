import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Lista, Item } from './styles'

function Home() {
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurantes(data)
      })
      .catch((err) => {
        console.error('Erro ao buscar restaurantes:', err)
      })
  }, [])

  return (
    <Container>
      <h1>Restaurantes</h1>
      <Lista>
        {restaurantes.map((restaurante) => (
          <Item key={restaurante.id}>
            <img src={restaurante.capa} alt={restaurante.titulo} />
            <h2>{restaurante.titulo}</h2>
            <p>{restaurante.tipo}</p>
            <Link to={`/perfil/${restaurante.id}`}>Saiba mais</Link>
          </Item>
        ))}
      </Lista>
    </Container>
  )
}

export default Home
