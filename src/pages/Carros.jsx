import { useMemo, useState } from 'react'
import Card from '../components/Card'
import { carros, categorias } from '../data/carros'

const MIN_DIAS = 1
const MAX_DIAS = 60

function Carros() {
  const [categoria, setCategoria] = useState('Todas')
  const [somenteDisponiveis, setSomenteDisponiveis] = useState(false)
  const [dias, setDias] = useState(3)

  const filtrados = useMemo(
    () =>
      carros.filter(
        (carro) =>
          (categoria === 'Todas' || carro.categoria === categoria) &&
          (!somenteDisponiveis || carro.disponivel),
      ),
    [categoria, somenteDisponiveis],
  )

  const alterarDias = (evento) => {
    const valor = Number(evento.target.value)
    if (Number.isNaN(valor)) return
    setDias(Math.min(MAX_DIAS, Math.max(MIN_DIAS, Math.trunc(valor))))
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="titulo-carros">
      <h1 id="titulo-carros" className="text-3xl font-extrabold sm:text-4xl">
        Nossa frota
      </h1>
      <p className="mt-2 text-zinc-400">Carros importados prontos para locação.</p>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
          {['Todas', ...categorias].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategoria(item)}
              aria-pressed={categoria === item}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                categoria === item
                  ? 'border-brand bg-brand text-zinc-950'
                  : 'border-zinc-700 text-zinc-300 hover:border-zinc-500'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-zinc-300">
            <input
              type="checkbox"
              checked={somenteDisponiveis}
              onChange={(evento) => setSomenteDisponiveis(evento.target.checked)}
              className="h-4 w-4 accent-amber-400"
            />
            Somente disponíveis
          </label>

          <label className="flex items-center gap-2 text-sm text-zinc-300">
            Dias de locação
            <input
              type="number"
              min={MIN_DIAS}
              max={MAX_DIAS}
              value={dias}
              onChange={alterarDias}
              className="w-20 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-zinc-100"
            />
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-zinc-500" aria-live="polite">
        {filtrados.length} {filtrados.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}
      </p>

      {filtrados.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-400">
          Nenhum veículo encontrado para os filtros selecionados.
        </p>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((carro) => (
            <Card key={carro.id} carro={carro} dias={dias} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Carros
