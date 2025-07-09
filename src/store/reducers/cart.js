import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  visivel: false,
  entrega: {
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  },
  pagamento: {
    numero: '',
    nome: '',
    vencimento: '',
    codigo: ''
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      const { id, nome, foto, preco } = action.payload
      const itemExistente = state.items.find((item) => item.id === id)

      if (!itemExistente) {
        state.items.push({ id, nome, foto, preco })
      }

      state.visivel = true
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    limparCarrinho: (state) => {
      state.items = []
      state.visivel = false
      state.entrega = {
        nome: '',
        endereco: '',
        cidade: '',
        cep: '',
        numero: '',
        complemento: ''
      }
      state.pagamento = {
        numero: '',
        nome: '',
        vencimento: '',
        codigo: ''
      }
    },

    salvarEntrega: (state, action) => {
      state.entrega = action.payload
    },

    salvarPagamento: (state, action) => {
      state.pagamento = action.payload
    },

    mostrarCarrinho: (state) => {
      state.visivel = true
    },

    fecharCarrinho: (state) => {
      state.visivel = false
    }
  }
})

export const {
  adicionar,
  removeFromCart,
  limparCarrinho,
  salvarEntrega,
  salvarPagamento,
  mostrarCarrinho,
  fecharCarrinho
} = cartSlice.actions

export default cartSlice.reducer

