export const formatMoneyBRL = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
