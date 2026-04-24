import { Link } from 'react-router-dom'

interface FooterLink {
  label: string
  to: string
}

const footerLinks: Record<string, FooterLink[]> = {
  Estrutura: [
    { label: 'Apresentação', to: '/' },
    { label: 'Produtos de aprendizagem', to: '/' },
    { label: 'Autoavaliação', to: '/' },
    { label: 'Objetivos futuros', to: '/' }
  ],
  Disciplinas: [
    { label: 'Psicologia Positiva', to: '/disciplina/psicologia-positiva' },
    { label: 'Fases da Vida III', to: '/disciplina/fases-da-vida-iii' },
    { label: 'Atividades reflexivas', to: '/' },
    { label: 'Síntese semestral', to: '/' }
  ],
  Período: [
    { label: '5º período - 2026', to: '/' },
    { label: 'Atividade integrada', to: '/' },
    { label: 'Aprendizagem crítica', to: '/' },
    { label: 'Articulação teoria-prática', to: '/' }
  ],
  Navegação: [
    { label: 'Página inicial', to: '/' },
    { label: 'Quadros de disciplina', to: '/' },
    { label: 'Itens por disciplina', to: '/' },
    { label: 'Reflexões', to: '/' }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-black text-white" id="about">
      <div className="px-6 pt-16 pb-12 md:px-14">
        <div className="mb-16 flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Link to="/" className="mb-4 block">
              <span className="text-lg font-bold tracking-widest text-white uppercase">Portfólio Museu</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Curso de Psicologia
              <br />
              5º período - 2026
              <br />
              Atividade Integrada
            </p>
            <p className="mt-3 text-sm text-white/50">Portfólio reflexivo: Fases da Vida III e Psicologia Positiva</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-white/50 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Portfólio Acadêmico. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link key={item} to="/" className="text-xs text-white/30 transition-colors hover:text-white/60">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
