import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavItem {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Psicologia Positiva', to: '/disciplina/psicologia-positiva' },
  { label: 'Fases da Vida III', to: '/disciplina/fases-da-vida-iii' }
]

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="1" y1="1" x2="21" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="1" x2="1" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="0" y1="1" x2="22" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="8" x2="22" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="15" x2="22" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6 md:px-14">
        <Link to="/" className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
          <img
            src="/icon-site.png"
            alt="Ícone do portfólio"
            className="h-8 w-8 shrink-0 rounded-sm object-cover"
          />
          <span className="text-base leading-none font-bold tracking-widest text-white uppercase">Portfólio Museu</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-sm text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-sm p-2 text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-white/10 bg-black/95 px-6 transition-all duration-300 ease-out md:hidden ${
          menuOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm py-1 text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
