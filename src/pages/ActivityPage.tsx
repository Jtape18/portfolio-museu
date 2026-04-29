import { Link, Navigate, useParams } from 'react-router-dom'
import BackToTopButton from '../components/ui/BackToTopButton'
import FadeInSection from '../components/ui/FadeInSection'
import { portfolioDisciplines } from '../features/portfolio/data'

export default function ActivityPage() {
  const { disciplineId, activityId } = useParams()
  const discipline = portfolioDisciplines.find((item) => item.id === disciplineId)
  const activity = discipline?.activities.find((item) => item.id === activityId)
  const activityIndex = discipline?.activities.findIndex((item) => item.id === activityId) ?? -1
  const nextActivity = activityIndex >= 0 ? discipline?.activities[activityIndex + 1] : undefined

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

      <FadeInSection className="bg-[#090b10] py-10 md:py-14">
        <div className="mx-auto w-full max-w-6xl px-8 md:px-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
            <div className="flex flex-wrap items-center gap-5">
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
          </div>

          <article className="max-w-5xl rounded-sm border border-white/10 bg-[#0f141e] p-6 md:p-10">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Reflexão da atividade</h2>
            <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-white/85 md:text-lg">{activity.description}</p>
          </article>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
            <Link
              to={`/disciplina/${discipline.id}`}
              className="text-[#ef8354] transition-colors hover:text-[#f29a74]"
            >
              ← Voltar para {discipline.title}
            </Link>
            {nextActivity ? (
              <Link
                to={`/disciplina/${discipline.id}/atividade/${nextActivity.id}`}
                className="rounded-sm bg-[#d4562f] px-4 py-2 text-white transition-colors hover:bg-[#b8411f]"
              >
                Próxima atividade →
              </Link>
            ) : (
              <Link
                to={`/disciplina/${discipline.id}`}
                className="rounded-sm border border-white/25 px-4 py-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                Voltar para início da disciplina
              </Link>
            )}
          </div>
          <div className="mt-6 text-right">
            <BackToTopButton />
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
