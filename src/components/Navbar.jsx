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
