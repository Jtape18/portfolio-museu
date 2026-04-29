import { Link } from 'react-router-dom'
import BackToTopButton from '../components/ui/BackToTopButton'
import FadeInSection from '../components/ui/FadeInSection'
import { portfolioDisciplines } from '../features/portfolio/data'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#090b10]">
      <section className="relative min-h-[80vh] w-full overflow-hidden md:min-h-screen">
        <img
          src="/fotos-marcela/WhatsApp Image 2026-04-24 at 16.55.58.jpeg"
          alt="Museu"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <h1 className="text-5xl leading-tight font-bold text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl lg:text-[6rem]">
            Portfólio
          </h1>
          <p className="mt-2 max-w-3xl text-base font-normal text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-lg">
            Apresentação reflexiva das disciplinas Fases da Vida III e Psicologia Positiva sob perspectiva de Marcela
            Cristinne Camarinha Gonçalves. <br />
            Centro Universitário do Estado do Pará.
          </p>
        </div>
      </section>

      <FadeInSection className="bg-[#090b10] px-8 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div>
            <h2 className="text-center text-2xl font-bold text-white md:text-3xl">Introdução</h2>
          </div>

          <article className="mx-auto w-full max-w-5xl">
            <p className="text-justify text-sm leading-relaxed text-white/80 md:text-base">
              Este Portfólio reúne e integra aprendizagens desenvolvidas nas disciplinas de Psicologia Positiva e
              Fases da Vida III, cursadas ao longo do quinto semestre da graduação em Psicologia. Ambas as disciplinas
              contribuíram de forma significativa para a ampliação da compreensão sobre o comportamento humano,
              especialmente ao integrar aspectos subjetivos do bem-estar com as transformações que ocorrem ao longo do
              ciclo vital.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/75 md:text-base">
              A disciplina de Psicologia Positiva proporcionou contato com uma abordagem que busca compreender e
              promover aspectos saudáveis e funcionais da vida humana. Entre os conceitos centrais, destacam-se
              emoções positivas, forças de caráter, engajamento, sentido de vida e relacionamentos saudáveis, com
              destaque para o modelo PERMA, proposto por Martin Seligman. Atividades como a construção do Ikigai,
              análises do filme Soul e dinâmicas em grupo fortaleceram a reflexão sobre propósito, autoconhecimento e
              desenvolvimento do bem-estar como processo contínuo.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/75 md:text-base">
              A disciplina de Fases da Vida III aprofundou o estudo das etapas do desenvolvimento, com ênfase na vida
              adulta e no envelhecimento. Foram discutidas mudanças físicas, cognitivas, emocionais e sociais, além de
              temas contemporâneos como adultez emergente, alimentação e qualidade de vida. Debates e análises de
              documentários contribuíram para uma visão crítica e contextualizada do desenvolvimento humano, reforçando
              a importância de compreender o indivíduo em sua totalidade.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/70 md:text-base">
              Os objetivos de aprendizagem deste portfólio envolvem compreender os principais conceitos das
              disciplinas, relacioná-los com situações práticas e desenvolver postura crítica e reflexiva. A
              organização foi construída a partir da seleção de conteúdos e experiências significativas, com registros
              reflexivos e revisão dos materiais trabalhados ao longo do semestre, buscando coerência, clareza e
              profundidade na apresentação dos aprendizados.
            </p>
          </article>
        </div>
      </FadeInSection>

      <FadeInSection className="grid w-full gap-0 md:grid-cols-2">
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
      </FadeInSection>
      <FadeInSection className="bg-[#090b10] px-8 py-10 md:px-20">
        <div className="text-right">
          <BackToTopButton />
        </div>
      </FadeInSection>
    </div>
  )
}
