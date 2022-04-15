import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export const coinBRL = (coin: number) => {
  const response = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2
  }).format(coin)

  return response
}
