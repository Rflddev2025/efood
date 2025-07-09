export async function getRestaurantePorId(id) {
  const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  const data = await response.json()
  return data
}
