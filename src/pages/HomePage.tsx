import { Link } from 'react-router-dom'
import { portfolioDisciplines } from '../data/portfolioData'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#090b10]">
      <section className="relative min-h-[80vh] w-full overflow-hidden md:min-h-screen">
        <img src="/imagens-museu/View on the Rijksmuseum from a helicopter.png" alt="Museu" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <h1 className="text-5xl leading-tight font-bold text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl lg:text-[6rem]">
            Portfólio Museu
          </h1>
          <p className="mt-2 max-w-3xl text-base font-normal text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-lg">
            Apresentação reflexiva das disciplinas Fases da Vida III e Psicologia Positiva, no formato de galeria com
            atividades selecionadas do semestre.
          </p>
        </div>
      </section>

      <section className="bg-[#0d1016] px-8 py-14 md:px-20 md:py-16">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
            Atividade Integrada - 5º Período | 2026
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Apresentação</h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-xl">
            Este portfólio foi desenvolvido como instrumento de avaliação reflexiva das disciplinas Fases da Vida III e
            Psicologia Positiva, cursadas no 5º período em 2026. A proposta organiza experiências de aprendizagem em
            formato de museu, reunindo atividades significativas, análises críticas e articulações entre teoria e
            prática.
          </p>
          <div className="mt-6 grid gap-2 border-l-2 border-[#ef8354] pl-4 text-sm text-white/80 md:text-base">
            <p>
              <strong>Aluna:</strong> Marcela Cristinne Camarinha Gonçaves
            </p>
            <p>
              <strong>Disciplinas:</strong> Fases da Vida III e Psicologia Positiva
            </p>
            <p>
              <strong>Entrega:</strong> 15/05 (com tolerância até 16/05, conforme orientação)
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            Cada quadro abaixo representa uma disciplina. Ao clicar, você acessa uma nova tela com os itens internos e
            as reflexões construídas ao longo do semestre.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            O objetivo deste material é evidenciar aprendizados, avanços e desafios vividos durante o semestre,
            destacando a construção do pensamento crítico e a conexão entre os referenciais teóricos e as práticas
            desenvolvidas em aula.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121722] px-8 py-10 md:px-20">
        <div className="grid max-w-6xl gap-6 md:grid-cols-3">
          <article>
            <h3 className="text-sm font-semibold tracking-widest text-white/90 uppercase">Capa e contexto</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Identificação acadêmica, disciplinas envolvidas e contextualização da proposta integrada.
            </p>
          </article>
          <article>
            <h3 className="text-sm font-semibold tracking-widest text-white/90 uppercase">Produtos de aprendizagem</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Seleção de atividades significativas com análise reflexiva, articulação teoria-prática e síntese crítica.
            </p>
          </article>
          <article>
            <h3 className="text-sm font-semibold tracking-widest text-white/90 uppercase">Autoavaliação</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Registro de avanços, dificuldades e definição de novos objetivos de desenvolvimento pessoal e acadêmico.
            </p>
          </article>
        </div>
      </section>

      <section className="grid w-full gap-0 md:grid-cols-2">
        {portfolioDisciplines.map((discipline) => (
          <Link
            key={discipline.id}
            to={`/disciplina/${discipline.id}`}
            className="group relative min-h-[520px] overflow-hidden md:min-h-[700px] lg:min-h-[900px]"
          >
            <img
              src={discipline.coverImage}
              alt={discipline.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
            <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:pb-12">
              <h2 className="text-2xl font-bold tracking-wide text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]">
                {discipline.title}
              </h2>
              <p className="mt-1 text-sm text-white/90 md:text-base">{discipline.subtitle}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-white/95">Ver atividades</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
