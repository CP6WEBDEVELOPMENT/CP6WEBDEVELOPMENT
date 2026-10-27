import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { carros } from '../data/carros'

const destaques = carros.filter((carro) => carro.destaque)

const etapas = [
  {
    numero: '01',
    titulo: 'Escolha o carro',
    texto: 'Filtre por categoria, compare preços e simule o valor total da sua locação.',
  },
  {
    numero: '02',
    titulo: 'Defina o período',
    texto: 'A partir de 7 dias você ganha 10% de desconto, e a partir de 15 dias, 15%.',
  },
  {
    numero: '03',
    titulo: 'Retire e aproveite',
    texto: 'Seguro incluso, vistoria digital e entrega no endereço que você preferir.',
  },
]

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.18),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Locação de carros importados
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            Dirija o que você sempre quis, sem abrir mão do conforto.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Esportivos, SUVs, sedãs de luxo e elétricos de marcas premium, com seguro incluso e
            retirada ou entrega no endereço que você escolher.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/carros"
              className="rounded-xl bg-brand px-8 py-3 font-semibold text-zinc-950 transition hover:brightness-110"
            >
              Ver frota completa
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4" aria-labelledby="titulo-destaques">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="titulo-destaques" className="text-2xl font-bold sm:text-3xl">
              Destaques da frota
            </h2>
            <p className="mt-2 text-zinc-400">Os modelos mais procurados pelos nossos clientes.</p>
          </div>
          <Link to="/carros" className="hidden text-sm font-semibold text-brand hover:underline sm:block">
            Ver todos →
          </Link>
        </div>
