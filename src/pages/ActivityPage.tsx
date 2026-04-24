import { Link, Navigate, useParams } from 'react-router-dom'
import { portfolioDisciplines } from '../data/portfolioData'

export default function ActivityPage() {
  const { disciplineId, activityId } = useParams()
  const discipline = portfolioDisciplines.find((item) => item.id === disciplineId)
  const activity = discipline?.activities.find((item) => item.id === activityId)

  if (!discipline || !activity) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-[#090b10]">
      <section className="relative min-h-[65vh] w-full overflow-hidden">
        <img src={activity.image} alt={activity.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <p className="text-sm font-semibold tracking-[0.15em] text-white/90 uppercase">{discipline.title}</p>
          <h1 className="mt-2 max-w-4xl text-3xl leading-tight font-bold text-white md:text-5xl">{activity.title}</h1>
        </div>
      </section>

      <section className="px-8 py-10 md:px-20 md:py-14">
        <div className="mb-8 flex flex-wrap items-center gap-5 text-sm font-semibold">
          <Link
            to={`/disciplina/${discipline.id}`}
            className="text-[#ef8354] transition-colors hover:text-[#f29a74]"
          >
            ← Voltar para {discipline.title}
          </Link>
          <Link to="/" className="text-white/70 transition-colors hover:text-white">
            Ir para home
          </Link>
        </div>

        <article className="max-w-5xl rounded-sm border border-white/10 bg-[#0f141e] p-6 md:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Reflexão da atividade</h2>
          <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-white/85 md:text-lg">{activity.description}</p>
        </article>
      </section>
    </div>
  )
}
