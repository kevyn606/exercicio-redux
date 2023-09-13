import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritoSlice from './reducers/favorito'
import api from '../services/api'
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
