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
