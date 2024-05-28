import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeatured: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getAction: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSports: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulation: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getRpg: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getFight: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionQuery,
  useGetFightQuery,
  useGetRpgQuery,
  useGetSimulationQuery,
  useGetSportsQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api
export default api
