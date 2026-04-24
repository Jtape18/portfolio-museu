import { useState } from 'react'
import { Link } from 'react-router-dom'

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6 md:px-14">
        <Link to="/" className="inline-flex items-center gap-2.5">
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
              className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            className="rounded-sm bg-[#d4562f] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#b8411f]"
          >
            Ver quadros
          </Link>
        </nav>

        <button
          type="button"
          className="p-2 text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="py-1 text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-sm bg-[#d4562f] px-5 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-[#b8411f]"
          >
            Ver quadros
          </Link>
        </nav>
      )}
    </header>
  )
}
