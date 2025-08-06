const API_URL = 'https://ebac-fake-api.vercel.app/api/efood/restaurantes'

export async function getRestaurantePorId(id) {
  const response = await fetch(`${API_URL}/${id}`)

  if (!response.ok) {
    throw new Error('Erro ao buscar restaurante')
  }

  const data = await response.json()
  return data
}

