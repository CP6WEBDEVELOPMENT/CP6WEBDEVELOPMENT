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

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wider text-zinc-500">
          {marca} · {pais}
        </p>
        <h3 className="mt-1 text-xl font-bold">{modelo}</h3>
        <p className="text-sm text-zinc-400">Ano {ano}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-lg bg-zinc-800/60 p-2">
            <dt className="text-zinc-500">Potência</dt>
            <dd className="mt-1 font-semibold">{potencia} cv</dd>
          </div>
          <div className="rounded-lg bg-zinc-800/60 p-2">
            <dt className="text-zinc-500">Lugares</dt>
            <dd className="mt-1 font-semibold">{lugares}</dd>
          </div>
          <div className="rounded-lg bg-zinc-800/60 p-2">
            <dt className="text-zinc-500">Câmbio</dt>
            <dd className="mt-1 truncate font-semibold" title={cambio}>
              {cambio.split(' ')[0]}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex items-end justify-between border-t border-zinc-800 pt-4">
          <p className="text-2xl font-extrabold text-brand">
            {formatarReais(diaria)}
            <span className="text-sm font-normal text-zinc-400"> / dia</span>
          </p>
          <div className="text-right">
            <p className="text-xs text-zinc-500">
              {dias} {dias === 1 ? 'dia' : 'dias'}
              {percentual > 0 && (
                <span className="ml-1 rounded bg-brand/20 px-1.5 py-0.5 font-semibold text-brand">
                  -{percentual * 100}%
                </span>
              )}
            </p>
            <p className="text-lg font-bold">{formatarReais(total)}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
