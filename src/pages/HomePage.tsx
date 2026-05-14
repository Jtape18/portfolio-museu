import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BackToTopButton from '../components/ui/BackToTopButton'
import FadeInSection from '../components/ui/FadeInSection'
import { AUTOAVALIACAO_ROUTE, autoavaliacaoSection } from '../features/portfolio/data/autoavaliacao'
import { portfolioDisciplines } from '../features/portfolio/data'

const heroImages = [
  '/fotos-marcela/WhatsApp Image 2026-04-24 at 16.55.58.jpeg',
  '/fotos-marcela/fotos-conteudo/WhatsApp Image 2026-04-29 at 14.48.00.jpeg',
  '/fotos-marcela/fotos-conteudo/WhatsApp Image 2026-04-29 at 14.48.10.jpeg',
  '/fotos-marcela/fotos-conteudo/WhatsApp Image 2026-04-29 at 14.48.21.jpeg',
  '/fotos-marcela/fotos-conteudo/WhatsApp Image 2026-04-29 at 14.48.29.jpeg',
  '/fotos-marcela/fotos-conteudo/WhatsApp Image 2026-04-29 at 14.50.12.jpeg',
  '/fotos-marcela/fotos-conteudo/WhatsApp Image 2026-04-29 at 14.50.21.jpeg',
  '/fotos-marcela/fotos-conteudo/WhatsApp Image 2026-04-29 at 14.50.29.jpeg'
]

export default function HomePage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      setActiveImageIndex(0)
    }
  }, [pathname])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length)
    }, 4800)

    return () => window.clearInterval(intervalId)
  }, [])

  const handleSelectImage = (index: number) => {
    setActiveImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-[#090b10]">
      <section className="relative min-h-[80vh] w-full overflow-hidden md:min-h-screen">
        {heroImages.map((imageSrc, index) => (
          <img
            key={imageSrc}
            src={imageSrc}
            alt="Galeria de memórias do portfólio"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out ${
              index === activeImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),rgba(0,0,0,0.35)_58%,rgba(0,0,0,0.65)_100%)]" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <h1 className="hero-reveal text-5xl leading-tight font-bold text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl lg:text-[6rem]">
            Portfólio
          </h1>
          <p className="hero-reveal hero-reveal-delay-1 mt-2 max-w-3xl text-base font-normal text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-lg">
            Apresentação reflexiva das disciplinas Psicologia Positiva e Fases da Vida III do 5º período de graduação em
            Psicologia sob perspectiva de Marcela Cristinne Camarinha Gonçalves.
            <br />
            Centro Universitário do Estado do Pará, 2026.
          </p>

          <div className="mt-5 flex items-center gap-2">
            {heroImages.map((imageSrc, index) => (
              <button
                key={`hero-dot-${imageSrc}`}
                type="button"
                aria-label={`Ir para imagem ${index + 1}`}
                aria-current={index === activeImageIndex}
                onClick={() => handleSelectImage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeImageIndex ? 'w-8 bg-[#ef8354]' : 'w-2.5 bg-white/45 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <FadeInSection className="bg-[#090b10] px-8 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div>
            <h2 className="text-center text-2xl font-bold text-white md:text-3xl">Introdução</h2>
          </div>

          <article className="mx-auto w-full max-w-5xl">
            <p className="text-justify text-sm leading-relaxed text-white/80 md:text-base">
              Este portfólio reúne e integra aprendizagens desenvolvidas nas disciplinas de Psicologia Positiva e Fases da
              Vida III, cursadas ao longo do quinto semestre da graduação em Psicologia. Como forma de apresentar esses
              conteúdos de maneira mais significativa e coerente com as reflexões propostas pelas disciplinas, optei por
              construir este trabalho no formato de um site inspirado em um museu. Essa escolha não foi apenas estética,
              mas simbólica: assim como um museu organiza, preserva e dá sentido a experiências, memórias e produções,
              este portfólio foi pensado como um espaço de exposição do meu próprio processo de desenvolvimento acadêmico
              e pessoal ao longo do semestre.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/78 md:text-base">
              A proposta do “site-museu” permitiu transformar cada atividade, reflexão e aprendizado em uma espécie de
              “obra”. Para compor esse espaço, utilizei fotos autorais de visitas a museus, passeios e outros momentos
              significativos, buscando aproximar ainda mais os visitantes das minhas experiências pessoais. Essas imagens
              estão presentes como elementos ilustrativos, mas também como parte da construção de significado,
              reforçando a autenticidade e a ideia de que o aprendizado também se dá a partir das experiências vividas fora
              do ambiente acadêmico.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/75 md:text-base">
              A disciplina de Psicologia Positiva proporcionou o contato com uma abordagem relativamente recente dentro da
              Psicologia, que busca compreender e promover aspectos saudáveis e funcionais da vida humana, ao invés de
              focar exclusivamente em patologias. Entre os conceitos centrais trabalhados, destacam-se o estudo das
              emoções positivas, o desenvolvimento das forças de caráter, o engajamento, o sentido de vida e a construção
              de relacionamentos saudáveis. Um dos principais referenciais teóricos abordados foi o modelo PERMA,
              proposto por Martin Seligman, que organiza o bem-estar em cinco dimensões: emoções positivas, engajamento,
              relacionamentos, sentido e realização. Além disso, foram realizadas atividades como a construção do Ikigai,
              que favoreceu a reflexão sobre propósito de vida, e análises de produções audiovisuais, como o filme “Soul”,
              que possibilitaram discutir, de forma prática, questões relacionadas ao sentido da existência e à valorização
              das experiências cotidianas. Reitero sobre o sentido de ter escolhido a temática de museu, pois a arte é uma
              das minhas grandes paixões e estar imersa nisso me proporciona bem-estar, pude compreender isso melhor
              durante as aulas dessa disciplina. Outro ponto relevante foi a compreensão de que o bem-estar não é apenas um
              estado emocional momentâneo, mas um processo contínuo que pode ser desenvolvido por meio de práticas
              intencionais, como a gratidão, o cultivo de relações positivas e o autoconhecimento. As atividades em grupo
              e dinâmicas propostas em sala, baseadas em metodologias ativas, contribuíram para uma aprendizagem mais
              significativa, pois permitiram vivenciar na prática os conceitos estudados, além de estimular a troca de
              experiências e diferentes perspectivas entre colegas de sala.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/75 md:text-base">
              A disciplina de Fases da Vida III aprofundou o estudo das etapas do desenvolvimento, com ênfase nas fases
              adultas e no envelhecimento. A partir de referenciais teóricos, como Desenvolvimento Humano e Tratado de
              Geriatria e Gerontologia, foi possível compreender que o desenvolvimento humano é um processo contínuo,
              influenciado por fatores biológicos, psicológicos, sociais e culturais. Foram discutidas as mudanças físicas
              e cognitivas que ocorrem ao longo da vida, bem como os desafios emocionais e sociais enfrentados em cada
              etapa. Um dos aspectos mais marcantes dessa disciplina foi a abordagem crítica de temas contemporâneos,
              como o desenvolvimento psicossocial na vida adulta, adultez emergente no Brasil, a influência da alimentação
              na qualidade de vida, aspectos psicológicos no envelhecimento, entre outros. Essas discussões ampliaram a
              compreensão sobre como o contexto social impacta diretamente o desenvolvimento humano, reforçando a
              importância de uma visão integral e contextualizada do indivíduo. Além disso, foram realizadas atividades
              baseadas em debates e análises de documentários, como “Você é o que você come”, que contribuíram para a
              reflexão sobre hábitos de vida e suas consequências ao longo do tempo.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/72 md:text-base">
              Os objetivos de aprendizagem deste portfólio envolvem a capacidade de compreender os principais conceitos das
              disciplinas, relacioná-los com situações práticas e desenvolver uma postura crítica e reflexiva diante dos
              conteúdos estudados. Ao longo do semestre, foi possível perceber um avanço significativo no desenvolvimento
              acadêmico, especialmente na habilidade de articular teoria e prática, participar das discussões em sala e
              construir reflexões mais profundas sobre os temas abordados e sobre a própria vida. Os produtos de
              aprendizagem aqui apresentados refletem não apenas a compreensão teórica, mas também a vivência prática
              proporcionada por metodologias ativas, como dinâmicas em grupo, debates, análises de filmes e atividades
              reflexivas. Entre os principais aprendizados, destacam-se a importância do autoconhecimento, da construção
              de relações positivas, da promoção do bem-estar ao longo da vida e da compreensão das diferentes fases do
              desenvolvimento humano em suas múltiplas dimensões.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/70 md:text-base">
              A organização deste portfólio foi realizada a partir da seleção de conteúdos, atividades e experiências que
              tiveram maior significado pessoal e acadêmico. Foram utilizadas estratégias como anotações de aula,
              registros reflexivos, organização cronológica dos materiais e revisão dos conteúdos trabalhados, visando
              garantir coerência, clareza e profundidade na apresentação. Assim como em um museu, cada elemento foi
              cuidadosamente escolhido e posicionado. Por fim, ressalta-se que os trabalhos aqui reunidos foram
              desenvolvidos durante o quinto semestre do curso, refletindo um processo contínuo de construção do
              conhecimento, mediado por aulas expositivas, práticas colaborativas e experiências significativas em sala de
              aula.
            </p>
          </article>
        </div>
      </FadeInSection>

      <FadeInSection className="grid w-full gap-0 md:grid-cols-2">
        {portfolioDisciplines.map((discipline) => (
          <Link
            key={discipline.id}
            to={`/disciplina/${discipline.id}`}
            className="group relative min-h-[520px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:min-h-[700px] lg:min-h-[900px]"
          >
            <img
              src={discipline.coverImage}
              alt={discipline.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
            <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:pb-12">
              <h2 className="relative block w-fit origin-left text-2xl font-bold tracking-wide text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-transform duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white/90 after:transition-all after:duration-300 after:content-[''] group-hover:scale-105 group-hover:after:w-full group-active:scale-105 group-active:after:w-full group-focus-visible:scale-105 group-focus-visible:after:w-full">
                {discipline.title}
              </h2>
              <span className="mt-4 block text-sm font-semibold text-white/95">Clique para ver as atividades</span>
            </div>
          </Link>
        ))}
        <Link
          to={AUTOAVALIACAO_ROUTE}
          className="group relative min-h-[420px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:col-span-2 md:min-h-[560px] lg:min-h-[640px]"
        >
          <img
            src={autoavaliacaoSection.coverImage}
            alt={autoavaliacaoSection.titleLines.join(' ')}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
          <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:pb-12">
            <h2 className="relative block w-fit max-w-4xl origin-left text-2xl font-bold tracking-wide text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-transform duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white/90 after:transition-all after:duration-300 after:content-[''] group-hover:scale-105 group-hover:after:w-full group-active:scale-105 group-active:after:w-full group-focus-visible:scale-105 group-focus-visible:after:w-full md:text-3xl">
              {autoavaliacaoSection.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <span className="mt-4 block text-sm font-semibold text-white/95">Clique para ver texto completo</span>
          </div>
        </Link>
      </FadeInSection>
      <FadeInSection className="bg-[#090b10] px-8 py-10 md:px-20">
        <div className="text-right">
          <BackToTopButton />
        </div>
      </FadeInSection>
    </div>
  )
}
