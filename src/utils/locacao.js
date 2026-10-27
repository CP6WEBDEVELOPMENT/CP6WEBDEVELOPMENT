const formatadorReais = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

export const formatarReais = (valor) => formatadorReais.format(valor)

export const percentualDesconto = (dias) => {
  if (dias >= 15) return 0.15
  if (dias >= 7) return 0.1
  return 0
}

export const calcularLocacao = (diaria, dias) => {
  const subtotal = diaria * dias
  const percentual = percentualDesconto(dias)
  const desconto = subtotal * percentual
  return { subtotal, percentual, desconto, total: subtotal - desconto }
}
