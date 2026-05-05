import { Link } from 'react-router-dom'
import FadeInSection from '../components/ui/FadeInSection'
import { autoavaliacaoSection } from '../features/portfolio/data/autoavaliacao'

export default function AutoavaliacaoPage() {
  const { coverImage, titleLines, body } = autoavaliacaoSection

  return (
    <div className="min-h-screen bg-[#090b10]">
      <section className="relative min-h-[65vh] w-full overflow-hidden md:min-h-[75vh]">
        <img
          src={coverImage}
          alt={`${titleLines.join(' ')} — imagem de ambiente de museu`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/80" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <p className="hero-reveal text-sm font-semibold tracking-[0.15em] text-white/90 uppercase">Portfólio</p>
          <h1 className="hero-reveal hero-reveal-delay-1 mt-3 max-w-4xl text-3xl leading-tight font-bold tracking-wide text-white uppercase md:text-5xl">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>
      </section>

      <FadeInSection className="bg-[#090b10] py-10 md:py-14">
        <div className="mx-auto w-full max-w-6xl px-8 md:px-20">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <Link
              to="/"
              className="btn-ui btn-ui-soft focus-visible:ring-2 focus-visible:ring-[#ef8354] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
            >
              ← Voltar para home
            </Link>
          </div>

          <article className="rounded-2xl border border-white/10 bg-[#0f141e] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-10 lg:max-w-5xl">
            <p className="text-justify text-sm leading-relaxed whitespace-pre-line text-white/85 md:text-lg">{body}</p>
          </article>
        </div>
      </FadeInSection>
    </div>
  )
}
