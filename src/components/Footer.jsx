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
