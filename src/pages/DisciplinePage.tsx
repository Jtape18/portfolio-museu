import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import ActivityCard from '../features/discipline/components/ActivityCard'
import { portfolioDisciplines } from '../features/portfolio/data'

export default function DisciplinePage() {
  const { disciplineId } = useParams()
  const navigate = useNavigate()
  const discipline = portfolioDisciplines.find((item) => item.id === disciplineId)

  if (!discipline) {
    return <Navigate to="/" replace />
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
            <ActivityCard
              key={activity.id}
              activity={activity}
              onOpen={(activityId) => navigate(`/disciplina/${discipline.id}/atividade/${activityId}`)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
