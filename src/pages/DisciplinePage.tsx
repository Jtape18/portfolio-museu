import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import BackToTopButton from '../components/ui/BackToTopButton'
import FadeInSection from '../components/ui/FadeInSection'
import ActivityCard from '../features/discipline/components/ActivityCard'
import { portfolioDisciplines } from '../features/portfolio/data'

export default function DisciplinePage() {
  const { disciplineId } = useParams()
  const navigate = useNavigate()
  const discipline = portfolioDisciplines.find((item) => item.id === disciplineId)
  const disciplineQuote =
    disciplineId === 'fases-da-vida-iii'
      ? '“Todo desenvolvimento verdadeiramente humano significa o desenvolvimento conjunto das autonomias individuais, das participações comunitárias e do sentimento de pertencer a espécie humana.” — Edgar Morin'
      : '“A Psicologia Positiva é um campo de estudo que se concentra na identificação e promoção dos fatores que contribuem para a saúde mental, a felicidade e o bem-estar humano. O objetivo é usar essas descobertas para criar uma vida mais saudável e significativa para todos.” — Martin Seligman'

  if (!discipline) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-[#090b10]">
      <section className="relative min-h-[80vh] w-full overflow-hidden md:min-h-screen">
        <img src={discipline.coverImage} alt={discipline.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <p className="hero-reveal text-sm font-semibold tracking-[0.15em] text-white/90 uppercase">Disciplina</p>
          <h1 className="hero-reveal hero-reveal-delay-1 mt-2 text-5xl leading-tight font-bold text-white uppercase sm:text-7xl md:text-8xl lg:text-[6rem]">
            {discipline.title}
          </h1>
        </div>
      </section>

      <FadeInSection className="bg-[#090b10] py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-8 md:px-20">
          <div className="mb-6 flex max-w-5xl items-center justify-between gap-4">
            <Link to="/" className="rounded-sm text-sm font-semibold text-[#ef8354] transition-colors duration-300 hover:text-[#f29a74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef8354] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]">
              ← Voltar para home
            </Link>
          </div>
          <div className="max-w-5xl">
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              {disciplineQuote}
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="bg-[#090b10] py-14">
        <div className="grid gap-0 md:grid-cols-2">
          {discipline.activities.map((activity) => (
            <FadeInSection key={activity.id}>
              <ActivityCard activity={activity} onOpen={(activityId) => navigate(`/disciplina/${discipline.id}/atividade/${activityId}`)} />
            </FadeInSection>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 px-8 md:px-20">
          <Link to="/" className="rounded-sm text-sm font-semibold text-[#ef8354] transition-colors duration-300 hover:text-[#f29a74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef8354] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]">
            ← Voltar para home
          </Link>
          <BackToTopButton />
        </div>
      </FadeInSection>
    </div>
  )
}
