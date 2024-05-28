import { Game } from '../Pages/Home'

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acumulador, valorAtual) => {
    if (valorAtual.prices.current) {
      return (acumulador += valorAtual.prices.current)
    }

    return 0
  }, 0)
}
