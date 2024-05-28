import { useEffect, useState } from 'react'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner></Banner>
        <ProductsList
          games={promocoes}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={emBreve}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
