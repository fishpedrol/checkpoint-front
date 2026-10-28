import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  function classeDoLink({ isActive }) {
    if (isActive) {
      return 'block rounded-lg bg-zinc-800 px-4 py-2 font-semibold text-amber-400'
    }
    return 'block rounded-lg px-4 py-2 text-zinc-200 hover:bg-zinc-800 hover:text-white'
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="bg-zinc-950 text-white">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3"
      >
        <Link to="/" onClick={fecharMenu} className="rounded-lg py-1 text-lg font-bold leading-tight">
          Carros Importados
          <span className="block text-xs font-normal text-zinc-400">Locação · demonstração</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          className="rounded-lg border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-800 md:hidden"
        >
          {menuAberto ? 'Fechar' : 'Menu'}
        </button>

        <ul
          id="menu-principal"
          className={`${menuAberto ? 'flex' : 'hidden'} w-full flex-col gap-1 pb-2 md:flex md:w-auto md:flex-row md:pb-0`}
        >
          <li>
            <NavLink to="/" end onClick={fecharMenu} className={classeDoLink}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/carros" end onClick={fecharMenu} className={classeDoLink}>
              Carros
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
