import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-zinc-900/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-tight">
            Auto<span className="text-brand">Prime</span> Import
          </p>
          <p className="mt-3 max-w-xs text-sm text-zinc-400">
            Locação de carros importados com atendimento personalizado, seguro incluso e entrega
            no endereço que você escolher.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <Link to="/" className="hover:text-brand">Home</Link>
            </li>
            <li>
              <Link to="/carros" className="hover:text-brand">Carros</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>contato@autoprimeimport.com.br</li>
            <li>(11) 4000-1234</li>
            <li>Seg a Sáb, das 8h às 20h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} AutoPrime Import. Projeto acadêmico FIAP - Web Development.
      </div>
    </footer>
  )
}

export default Footer
