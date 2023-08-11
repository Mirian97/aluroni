const orderList: IOrderList = [
  {
    name: '',
    value: ''
  },
  {
    name: 'Porção',
    value: 'porcao'
  },
  {
    name: 'Qtd. pessoas',
    value: 'qtd_pessoas'
  },
  {
    name: 'Preço',
    value: 'preco'
  }
]

export type IOrderOptions = '' | 'porcao' | 'qtd_pessoas' | 'preco'

export interface IOrderItem {
  name: string
  value: IOrderOptions
}

export type IOrderList = IOrderItem[]

export default orderList
