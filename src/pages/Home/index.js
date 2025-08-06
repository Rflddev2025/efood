import { useEffect, useState } from 'react'
import { Background, Container, Grid} from './styles'
import RestaurantCard from '../../components/RestaurantCard'

function Home() {
  const [restaurantes, setRestaurantes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        const response = await fetch(
          'https://ebac-fake-api.vercel.app/api/efood/restaurantes'
        )

        if (!response.ok) {
          throw new Error('Erro na resposta da API')
        }

        const data = await response.json()

        if (Array.isArray(data)) {
          setRestaurantes(data)
        } else {
          console.error('Dados inesperados:', data)
        }
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurantes()
  }, [])

  return (
    <Background>
      <Container>
        {loading ? (
          <p>Carregando restaurantes...</p>
        ) : restaurantes.length > 0 ? (
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
        ) : (
          <p>Nenhum restaurante encontrado.</p>
        )}
      </Container>
    </Background>
  )
}

export default Home


