import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/carros', label: 'Carros' },
]

const desktopClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-brand text-zinc-950' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
  }`

const mobileClass = ({ isActive }) =>
  `block rounded-md px-3 py-3 text-base font-medium ${
    isActive ? 'bg-brand text-zinc-950' : 'text-zinc-300 hover:bg-zinc-800'
  }`

function Navbar() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4"
        aria-label="Navegação principal"
      >
        <NavLink to="/" onClick={fechar} className="text-lg font-bold tracking-tight">
          Auto<span className="text-brand">Prime</span> Import
        </NavLink>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={desktopClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setAberto((valor) => !valor)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          className="rounded-md p-2 text-zinc-300 hover:bg-zinc-800 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {aberto ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {aberto && (
        <ul id="menu-mobile" className="space-y-1 border-t border-zinc-800 px-4 py-3 md:hidden">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} onClick={fechar} className={mobileClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
