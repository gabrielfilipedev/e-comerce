import { useEffect, useState } from 'react'

import { Imagem, Precos, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../Pages/Home'
import { formataPreco } from '../ProductsList'

import { useGetFeaturedQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedQuery()

  if (!game) {
    return <h1>carregando...</h1>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span>
            <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique aqui para aproveitar"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
