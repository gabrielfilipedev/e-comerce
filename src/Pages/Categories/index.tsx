import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetRpgQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightQuery
} from '../../services/api'

import { Game } from '../Home'

const Categories = () => {
  const { data: acao } = useGetActionQuery()
  const { data: rpg } = useGetRpgQuery()
  const { data: esportes } = useGetSportsQuery()
  const { data: simulacao } = useGetSimulationQuery()
  const { data: luta } = useGetFightQuery()

  if (acao && rpg && esportes && simulacao && luta) {
    return (
      <>
        <ProductsList
          games={acao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={esportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulacao}
          title="Simulacao"
          background="black"
          id="simulation"
        />
        <ProductsList games={luta} title="Luta" background="gray" id="fight" />
        <ProductsList games={rpg} title="Rpg" background="black" id="rpg" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
