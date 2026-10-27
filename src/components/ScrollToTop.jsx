import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-2 text-zinc-400">O endereço acessado não existe neste site.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-xl bg-brand px-6 py-3 font-semibold text-zinc-950 hover:brightness-110"
      >
        Voltar para a Home
      </Link>
    </section>
  )
}

export default NaoEncontrada
