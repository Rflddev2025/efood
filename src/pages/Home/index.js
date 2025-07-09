import { useEffect, useState } from 'react'
import { Background, Container, Grid } from './styles'
import RestaurantCard from '../../components/RestaurantCard'

function Home() {
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro na resposta da API')
        }
        return res.json()
      })
      .then((data) => {
        setRestaurantes(data)
      })
      .catch((err) => {
        console.error('Erro ao buscar restaurantes:', err)
      })
  }, [])

  return (
    <Background>
      <Container>
        <Grid>
          {restaurantes.map((restaurante) => (
            <RestaurantCard
              key={restaurante.id}
              restaurante={{
                id: restaurante.id,
                foto: restaurante.capa,
                nome: restaurante.titulo,
                tipo: restaurante.tipo,
                descricao: restaurante.descricao,
                avaliacao: restaurante.avaliacao
              }}
            />
          ))}
        </Grid>
      </Container>
    </Background>
  )
}

export default Home

