import { useState } from 'react'
import { calcularLocacao, formatarReais } from '../utils/locacao'

function Card({ carro, dias = 1 }) {
  const { marca, modelo, ano, categoria, pais, potencia, cambio, lugares, diaria, disponivel, cor, imagem } =
    carro
  const [erro, setErro] = useState(false)
  const { total, percentual } = calcularLocacao(diaria, dias)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-zinc-700">
      <div className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${cor} p-4`}>
        {imagem && !erro && (
          <>
            <img
              src={imagem}
              alt={`${marca} ${modelo}`}
              loading="lazy"
              onError={() => setErro(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
          </>
        )}
        <span className="relative rounded-full bg-zinc-950/70 px-3 py-1 text-xs font-medium">
          {categoria}
        </span>
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            disponivel ? 'bg-emerald-400 text-emerald-950' : 'bg-zinc-950/70 text-zinc-300'
          }`}
        >
          {disponivel ? 'Disponível' : 'Indisponível'}
        </span>
      </div>
