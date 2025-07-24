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
    card: {
      number: '',
      name: '',
      code: '',
      expires: {
        month: '',
        year: ''
      }
    }
  },
  orderId: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      const { id, nome, foto, preco } = action.payload
      const itemExistente = state.items.find((item) => item.id === id)

      if (itemExistente) {
        itemExistente.quantidade += 1
      } else {
        state.items.push({ id, nome, foto, preco, quantidade: 1 })
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
        card: {
          number: '',
          name: '',
          code: '',
          expires: {
            month: '',
            year: ''
          }
        }
      }
    },

    salvarEntrega: (state, action) => {
      state.entrega = action.payload
    },

    salvarPagamento: (state, action) => {
      const { nome, numero, codigo, vencimento } = action.payload
      const [mes, ano] = vencimento.split('/')

      state.pagamento = {
        card: {
          name: nome,
          number: numero,
          code: Number(codigo),
          expires: {
            month: Number(mes),
            year: Number(`20${ano}`)
          }
        }
      }
    },

    salvarOrderId: (state, action) => {
      state.orderId = action.payload
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
  salvarOrderId,
  mostrarCarrinho,
  fecharCarrinho
} = cartSlice.actions

export default cartSlice.reducer



