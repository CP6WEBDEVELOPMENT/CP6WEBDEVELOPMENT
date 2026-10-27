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