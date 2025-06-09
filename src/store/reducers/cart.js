
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      const prato = action.payload
      const itemExistente = state.items.find((item) => item.id === prato.id)

      if (!itemExistente) {
        state.items.push(prato)
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    limparCarrinho: (state) => {
      state.items = []
    }
  }
})

export const { adicionar, removeFromCart, limparCarrinho } = cartSlice.actions
export default cartSlice.reducer

