import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game}></Hero>
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b>
          {game.details.developer} <br />
          <b>Editora:</b>
          {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          {game.details.languages.join(', ')}. As opções de áudio e legendas
          podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      ></Gallery>
    </>
  )
}

export default Product
