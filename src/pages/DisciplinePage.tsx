import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { portfolioDisciplines } from '../data/portfolioData'

export default function DisciplinePage() {
  const { disciplineId } = useParams()
  const navigate = useNavigate()
  const discipline = portfolioDisciplines.find((item) => item.id === disciplineId)

  if (!discipline) {
    return <Navigate to="/" replace />
  }

  const getShortDescription = (text: string) => {
    const firstSentence = text.split('. ')[0] ?? text
    return firstSentence.length > 90 ? `${firstSentence.slice(0, 90)}...` : `${firstSentence}.`
  }

  return (
    <div className="min-h-screen bg-[#090b10]">
      <section className="relative min-h-[65vh] w-full overflow-hidden">
        <img src={discipline.coverImage} alt={discipline.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <p className="text-sm font-semibold tracking-[0.15em] text-white/90 uppercase">Disciplina</p>
          <h1 className="mt-2 text-4xl leading-tight font-bold text-white uppercase md:text-6xl">{discipline.title}</h1>
          <p className="mt-2 max-w-3xl text-sm text-white/90 md:text-base">{discipline.subtitle}</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0f141e] px-8 py-10 md:px-20">
        <div className="max-w-5xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Introdução da Disciplina</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
            Nesta seção, apresento as atividades selecionadas de <strong>{discipline.title}</strong>, com foco no
            processo de aprendizagem, na análise dos conceitos centrais e na forma como cada experiência contribuiu para
            minha formação acadêmica e profissional.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mb-8 px-8 md:px-20">
          <Link to="/" className="text-sm font-semibold text-[#ef8354] transition-colors hover:text-[#f29a74]">
            ← Voltar para home
          </Link>
        </div>

        <div className="grid gap-0 md:grid-cols-2">
          {discipline.activities.map((activity) => (
            <article
              key={activity.id}
              className="group relative min-h-[420px] cursor-pointer overflow-hidden md:min-h-[600px] lg:min-h-[760px]"
              onClick={() => navigate(`/disciplina/${discipline.id}/atividade/${activity.id}`)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  navigate(`/disciplina/${discipline.id}/atividade/${activity.id}`)
                }
              }}
              role="link"
              tabIndex={0}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
              <div className="absolute right-0 bottom-0 left-0 px-8 pb-8 md:px-10 md:pb-10">
                <h2 className="text-lg font-bold text-white md:text-2xl">{activity.title}</h2>
                <p className="mt-1 text-xs text-white/85 md:text-sm">{getShortDescription(activity.description)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
