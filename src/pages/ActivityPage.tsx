import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, Navigate, useParams } from 'react-router-dom'
import BackToTopButton from '../components/ui/BackToTopButton'
import FadeInSection from '../components/ui/FadeInSection'
import { portfolioDisciplines } from '../features/portfolio/data'

export default function ActivityPage() {
  const { disciplineId, activityId } = useParams()
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeContentImageIndex, setActiveContentImageIndex] = useState(0)
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number | null>(null)
  const discipline = portfolioDisciplines.find((item) => item.id === disciplineId)
  const activity = discipline?.activities.find((item) => item.id === activityId)
  const activityIndex = discipline?.activities.findIndex((item) => item.id === activityId) ?? -1
  const nextActivity = activityIndex >= 0 ? discipline?.activities[activityIndex + 1] : undefined
  const contentImages = activity?.contentImages ?? (activity?.contentImage ? [activity.contentImage] : [])
  const hasMultipleContentImages = contentImages.length > 1
  const activeContentImage = contentImages[activeContentImageIndex] ?? contentImages[0]
  const zoomedImageSrc = zoomedImageIndex !== null ? contentImages[zoomedImageIndex] : null
  const zoomedImageAlt =
    zoomedImageIndex !== null
      ? activity?.contentImageAlt ?? `${activity?.title} - imagem ${zoomedImageIndex + 1}`
      : ''

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const maxScrollable = document.documentElement.scrollHeight - window.innerHeight

      if (maxScrollable <= 0) {
        setReadingProgress(0)
        return
      }

      const progress = Math.min(100, Math.max(0, (scrollTop / maxScrollable) * 100))
      setReadingProgress(progress)
    }

    updateReadingProgress()
    window.addEventListener('scroll', updateReadingProgress, { passive: true })

    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  useEffect(() => {
    setActiveContentImageIndex(0)
  }, [activityId])

  useEffect(() => {
    if (zoomedImageIndex === null) {
      return
    }

    const handleEscToClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setZoomedImageIndex(null)
      }

      if (!hasMultipleContentImages) {
        return
      }

      if (event.key === 'ArrowRight') {
        setZoomedImageIndex((current) => {
          if (current === null) {
            return 0
          }

          return (current + 1) % contentImages.length
        })
      }

      if (event.key === 'ArrowLeft') {
        setZoomedImageIndex((current) => {
          if (current === null) {
            return 0
          }

          return (current - 1 + contentImages.length) % contentImages.length
        })
      }
    }

    window.addEventListener('keydown', handleEscToClose)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEscToClose)
      document.body.style.overflow = ''
    }
  }, [zoomedImageIndex, hasMultipleContentImages, contentImages.length])

  useEffect(() => {
    if (contentImages.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveContentImageIndex((currentIndex) => (currentIndex + 1) % contentImages.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [activityId, contentImages.length])

  if (!discipline || !activity) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-[#090b10]">
      <div className="fixed top-16 right-0 left-0 z-40 h-0.5 bg-white/10">
        <div
          className="h-full bg-[#ef8354] transition-[width] duration-200 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <section className="relative min-h-[65vh] w-full overflow-hidden">
        <img src={activity.image} alt={activity.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <p className="hero-reveal text-sm font-semibold tracking-[0.15em] text-white/90 uppercase">{discipline.title}</p>
          <h1 className="hero-reveal hero-reveal-delay-1 mt-2 max-w-4xl text-3xl leading-tight font-bold text-white md:text-5xl">
            {activity.title}
          </h1>
        </div>
      </section>

      <FadeInSection className="bg-[#090b10] py-10 md:py-14">
        <div className="mx-auto w-full max-w-6xl px-8 md:px-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <Link
                to={`/disciplina/${discipline.id}`}
                className="btn-ui btn-ui-soft focus-visible:ring-2 focus-visible:ring-[#ef8354] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
              >
                ← Voltar para {discipline.title}
              </Link>
              <Link
                to="/"
                className="btn-ui btn-ui-neutral focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
              >
                Ir para home
              </Link>
            </div>
          </div>

          <section
            className={`grid gap-8 lg:items-start ${
              contentImages.length > 0 ? 'lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]' : 'lg:grid-cols-1'
            }`}
          >
            <article className={`rounded-2xl border border-white/10 bg-[#0f141e] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-10 ${contentImages.length === 0 ? 'lg:max-w-5xl' : ''}`}>
              <p className="text-sm leading-relaxed whitespace-pre-line text-white/85 md:text-lg">{activity.description}</p>
            </article>

            {contentImages.length > 0 && (
              <div className="grid gap-4 lg:sticky lg:top-24">
                <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f141e] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <button
                    type="button"
                    onClick={() => {
                      setZoomedImageIndex(activeContentImageIndex)
                    }}
                    className="w-full cursor-zoom-in"
                    aria-label="Ampliar imagem"
                  >
                    <img
                      key={activeContentImage}
                      src={activeContentImage}
                      alt={
                        activity.contentImageAlt ??
                        `${activity.title} - imagem ${activeContentImageIndex + 1}`
                      }
                      className="content-image-fade h-full w-full rounded-xl border border-white/10 object-cover"
                      loading="lazy"
                    />
                  </button>
                  <figcaption className="px-3 pt-3 pb-1 text-xs text-white/60">Registro visual da atividade.</figcaption>
                </figure>

                {hasMultipleContentImages && (
                  <div className="grid grid-cols-3 gap-2">
                    {contentImages.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveContentImageIndex(index)}
                        aria-label={`Ver imagem ${index + 1}`}
                        aria-current={index === activeContentImageIndex}
                        className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                          index === activeContentImageIndex
                            ? 'border-[#ef8354] ring-2 ring-[#ef8354]/60'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${activity.title} - miniatura ${index + 1}`}
                          className="h-20 w-full object-cover md:h-24"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
            <Link
              to={`/disciplina/${discipline.id}`}
              className="btn-ui btn-ui-soft focus-visible:ring-2 focus-visible:ring-[#ef8354] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
            >
              ← Voltar para {discipline.title}
            </Link>
            {nextActivity ? (
              <Link
                to={`/disciplina/${discipline.id}/atividade/${nextActivity.id}`}
                className="btn-ui btn-ui-primary cta-pulse-on-view focus-visible:ring-2 focus-visible:ring-[#ef8354] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
              >
                Próxima atividade →
              </Link>
            ) : (
              <Link
                to={`/disciplina/${discipline.id}`}
                className="btn-ui btn-ui-neutral focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
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

      {zoomedImageSrc &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-[2px]"
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada"
            onClick={() => setZoomedImageIndex(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-xs font-semibold text-white/90 transition-colors hover:bg-black/70"
              onClick={() => setZoomedImageIndex(null)}
            >
              Fechar
            </button>
            {hasMultipleContentImages && (
              <>
                <button
                  type="button"
                  aria-label="Imagem anterior"
                  className="absolute left-4 rounded-full border border-white/20 bg-black/45 p-3 text-xl text-white transition-colors hover:bg-black/70 md:left-8"
                  onClick={(event) => {
                    event.stopPropagation()
                    setZoomedImageIndex((current) => {
                      if (current === null) {
                        return 0
                      }

                      return (current - 1 + contentImages.length) % contentImages.length
                    })
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Próxima imagem"
                  className="absolute right-4 rounded-full border border-white/20 bg-black/45 p-3 text-xl text-white transition-colors hover:bg-black/70 md:right-8"
                  onClick={(event) => {
                    event.stopPropagation()
                    setZoomedImageIndex((current) => {
                      if (current === null) {
                        return 0
                      }

                      return (current + 1) % contentImages.length
                    })
                  }}
                >
                  ›
                </button>
              </>
            )}
            <img
              key={zoomedImageSrc}
              src={zoomedImageSrc}
              alt={zoomedImageAlt}
              className="zoom-image-enter max-h-[90vh] max-w-[95vw] rounded-xl border border-white/20 object-contain shadow-[0_20px_100px_rgba(0,0,0,0.6)]"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </div>
  )
}
