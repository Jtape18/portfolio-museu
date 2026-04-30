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
          <h1 className="hero-reveal text-5xl leading-tight font-bold text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl lg:text-[6rem]">
            Portfólio
          </h1>
          <p className="hero-reveal hero-reveal-delay-1 mt-2 max-w-3xl text-base font-normal text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-lg">
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
              A disciplina de Psicologia Positiva proporcionou o contato com uma abordagem relativamente recente dentro
              da Psicologia, que busca compreender e promover aspectos saudáveis e funcionais da vida humana, ao invés
              de focar exclusivamente em patologias. Entre os conceitos centrais trabalhados, destacam-se o estudo das
              emoções positivas, o desenvolvimento das forças de caráter, o engajamento, o sentido de vida e a
              construção de relacionamentos saudáveis. Um dos principais referenciais teóricos abordados foi o modelo
              PERMA, proposto por Martin Seligman, que organiza o bem-estar em cinco dimensões: emoções positivas ,
              engajamento, relacionamentos, sentido e realização. Além disso, foram realizadas atividades como a
              construção do Ikigai, que favoreceu a reflexão sobre propósito de vida, e análises de produções
              audiovisuais, como o filme “Soul”, que possibilitaram discutir, de forma prática, questões relacionadas
              ao sentido da existência e à valorização das experiências cotidianas. Outro ponto relevante na disciplina
              foi a compreensão de que o bem-estar não é apenas um estado emocional momentâneo, mas um processo
              contínuo que pode ser desenvolvido por meio de práticas intencionais, como a gratidão, o cultivo de
              relações positivas e o autoconhecimento. As atividades em grupo e dinâmicas propostas em sala, baseadas
              em metodologias ativas, contribuíram para uma aprendizagem mais significativa, pois permitiram vivenciar
              na prática os conceitos estudados, além de estimular a troca de experiências e diferentes perspectivas
              entre os colegas.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/75 md:text-base">
              A disciplina de Fases da Vida III aprofundou o estudo das etapas do desenvolvimento, com ênfase nas
              fases adultas e no envelhecimento. A partir de referenciais teóricos clássicos, como Papalia, foi
              possível compreender que o desenvolvimento humano é um processo contínuo, influenciado por fatores
              biológicos, psicológicos, sociais e culturais. Foram discutidas as mudanças físicas e cognitivas que
              ocorrem ao longo da vida, bem como os desafios emocionais e sociais enfrentados em cada etapa. Um dos
              aspectos mais marcantes dessa disciplina foi a abordagem crítica de temas contemporâneos, como o
              desenvolvimento psicossocial na vida adulta, adultez emergente no Brasil, a influência da alimentação na
              qualidade de vida, aspectos psicológicos no envalhecimento, entre outros. Essas discussões ampliaram a
              compreensão sobre como o contexto social impacta diretamente o desenvolvimento humano, reforçando a
              importância de uma visão integral e contextualizada do indivíduo. Além disso, foram realizadas atividades
              baseadas em debates e análises de documentários, como “Você é o que você come”, que contribuíram para a
              reflexão sobre hábitos de vida e suas consequências ao longo do tempo.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/70 md:text-base">
              Os objetivos de aprendizagem deste portfólio envolvem a capacidade de compreender os principais conceitos
              das disciplinas, relacioná-los com situações práticas e desenvolver uma postura crítica e reflexiva
              diante dos conteúdos estudados. Ao longo do semestre, foi possível perceber um avanço significativo no
              desenvolvimento acadêmico, especialmente na habilidade de articular teoria e prática, participar das
              discussões em sala e construir reflexões mais profundas sobre os temas abordados e sobre vida pessoal. Os
              produtos de aprendizagem aqui apresentados refletem não apenas a compreensão teórica, mas também a
              vivência prática proporcionada por metodologias ativas, como dinâmicas em grupo, debates, análises de
              filmes e atividades reflexivas. Entre os principais aprendizados, destacam-se a importância do
              autoconhecimento, da construção de relações positivas, da promoção do bem-estar ao longo da vida e da
              compreensão das diferentes fases do desenvolvimento humano em suas múltiplas dimensões.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-white/70 md:text-base">
              A organização deste portfólio foi realizada a partir da seleção de conteúdos, atividades e experiências
              que tiveram maior significado pessoal e acadêmico. Foram utilizadas estratégias como anotações de aula,
              registros reflexivos, organização cronológica dos materiais e revisão dos conteúdos trabalhados, visando
              garantir coerência, clareza e profundidade na apresentação. Por fim, ressalta-se que os trabalhos aqui
              reunidos foram desenvolvidos durante o quinto semestre do curso, refletindo um processo contínuo de
              construção do conhecimento, mediado por aulas expositivas, práticas colaborativas e experiências
              significativas em sala de aula.
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
              <span className="mt-4 block text-sm font-semibold text-white/95">Ver atividades</span>
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
