export interface PortfolioActivity {
  id: string
  title: string
  image: string
  description: string
}

export interface PortfolioDiscipline {
  id: string
  title: string
  subtitle: string
  coverImage: string
  activities: PortfolioActivity[]
}

export const portfolioDisciplines: PortfolioDiscipline[] = [
  {
    id: 'psicologia-positiva',
    title: 'Psicologia Positiva',
    subtitle: 'Bem-estar, propósito e realização pessoal',
    coverImage: '/imagens-museu/7c655977-aa53-4545-adc0-73647f9c4b77.png',
    activities: [
      {
        id: 'ikigai',
        title: 'Atividade - Ikigai',
        image: '/imagens-museu/26491cbb-a952-4561-9e26-a943c96d7182.png',
        description:
          'A atividade foi desenvolvida na disciplina de Psicologia Positiva e teve como foco o conceito de Ikigai, entendido como a interseção entre aquilo que se ama, no que se é bom, o que o mundo precisa e aquilo pelo qual se pode ser recompensado. Durante a atividade, foi possível refletir sobre propósito de vida e realização pessoal. Segundo Martin Seligman, o bem-estar está diretamente relacionado à construção de sentido e engajamento ao longo da vida. A partir dessa perspectiva, compreendi que o Ikigai se aproxima da ideia de uma vida com propósito, especialmente relevante na vida adulta, quando escolhas profissionais e pessoais ganham maior peso. Essa reflexão contribuiu para perceber que indivíduos que identificam seu propósito tendem a apresentar maior satisfação e equilíbrio emocional, sendo esse um aspecto fundamental para o desenvolvimento humano saudável.'
      },
      {
        id: 'filme-soul',
        title: 'Atividade - Filme Soul',
        image: '/imagens-museu/43c018c2-8019-481a-bec3-f871d4d82b2f.png',
        description:
          'A atividade consistiu na análise do filme Soul, abordando temas como propósito, sentido da vida e valorização das experiências cotidianas. O filme mostra que a vida não se resume a grandes conquistas, mas também aos pequenos momentos. Essa ideia dialoga com a Psicologia Positiva, especialmente com os estudos de Martin Seligman sobre bem-estar. A reflexão proporcionada pela atividade permitiu compreender que, na vida adulta, muitas pessoas se frustram ao não alcançar grandes objetivos, negligenciando experiências simples que também geram felicidade. Na prática, isso evidencia a importância de desenvolver uma percepção mais sensível sobre a vida cotidiana, valorizando o presente como parte essencial do desenvolvimento humano.'
      },
      {
        id: 'reportagem',
        title: 'Atividade - Reportagem',
        image: '/imagens-museu/d10d0778-8359-440b-a3ee-7bb11d884093.png',
        description:
          'A atividade envolveu a análise de uma reportagem relacionada ao bem-estar e qualidade de vida. Durante a discussão, foram abordados fatores que influenciam a felicidade, como saúde mental, relações interpessoais e propósito. De acordo com Martin Seligman, o bem-estar é multidimensional, envolvendo emoções positivas, engajamento e sentido. A partir dessa atividade, foi possível refletir sobre como a sociedade contemporânea muitas vezes associa felicidade apenas ao sucesso material, desconsiderando outros aspectos fundamentais. Essa compreensão contribui para uma visão mais ampla do desenvolvimento humano, especialmente na vida adulta, onde as pressões sociais podem impactar diretamente a saúde mental.'
      },
      {
        id: 'perma',
        title: 'Aula sobre Modelo PERMA',
        image: '/imagens-museu/e9c05887-fb2f-429d-9849-8a4ac73a7611.png',
        description:
          'A aula abordou o modelo PERMA, proposto por Martin Seligman, que define cinco elementos do bem-estar: emoções positivas, engajamento, relacionamentos, sentido e realização. Durante a atividade, foi possível compreender como esses elementos se articulam na construção de uma vida satisfatória. A reflexão gerada evidenciou que o desenvolvimento humano na fase adulta está diretamente ligado ao equilíbrio entre esses fatores. Na prática, indivíduos que cultivam relações saudáveis, propósito e conquistas pessoais tendem a apresentar maior qualidade de vida, o que reforça a importância desse modelo para compreensão do comportamento humano.'
      },
      {
        id: 'circulo-apoio',
        title: 'Relacionamentos Positivos + Círculo de Apoio',
        image: '/imagens-museu/5361233f-6538-48eb-9a02-84a470f45dcb.png',
        description:
          'A atividade teve como foco os relacionamentos positivos e incluiu a dinâmica do Círculo de Apoio, na qual foi possível identificar pessoas significativas na rede de suporte social. Segundo Martin Seligman, os relacionamentos são um dos pilares do bem-estar. A reflexão proporcionada pela atividade destacou a importância das conexões interpessoais ao longo da vida adulta e na velhice. Foi possível perceber que o apoio social contribui para a saúde emocional e enfrentamento de dificuldades. Na prática, isso se evidencia em indivíduos que mantêm vínculos afetivos sólidos, apresentando maior resiliência e satisfação com a vida.'
      }
    ]
  },
  {
    id: 'fases-da-vida-iii',
    title: 'Fases da Vida III',
    subtitle: 'Processos psicossociais no ciclo vital',
    coverImage: '/imagens-museu/ab454832-8f21-4b47-99f4-376ff0f75687.png',
    activities: [
      {
        id: 'violencia-genero',
        title: 'Debate sobre violência de gênero',
        image: '/imagens-museu/89e20824-d19f-4442-ae7f-da8cf5835334.png',
        description:
          'A atividade consistiu em um debate sobre violência de gênero, abordando suas implicações psicológicas e sociais. A discussão evidenciou como esse tipo de violência impacta o desenvolvimento humano, especialmente na vida adulta. A partir de uma perspectiva crítica, foi possível compreender que fatores culturais e sociais influenciam essas dinâmicas. Essa reflexão contribui para a formação profissional, destacando a importância de uma atuação ética e sensível diante dessas questões. Na prática, evidencia-se a necessidade de políticas públicas e intervenções que promovam proteção e apoio às vítimas.'
      },
      {
        id: 'voce-e-o-que-come',
        title: 'Documentário: Você é o que você come',
        image: '/imagens-museu/09d47cbb-4a66-4f13-9a47-86e2d35da50e.png',
        description:
          'A atividade envolveu a discussão do documentário Você é o que você come, que aborda a relação entre alimentação, saúde e qualidade de vida. A partir dessa análise, foi possível refletir sobre como hábitos alimentares influenciam o desenvolvimento humano ao longo da vida. Na fase adulta e na velhice, a alimentação adequada torna-se essencial para a manutenção da saúde física e mental. Essa atividade contribuiu para compreender que o autocuidado é um fator fundamental para o envelhecimento saudável, impactando diretamente na qualidade de vida.'
      },
      {
        id: 'adulto-intermediario',
        title: 'Aula sobre Adulto Intermediário (estações)',
        image: '/imagens-museu/b42ee780-8428-477a-94d2-cfaa12bf953f.png',
        description:
          'A aula abordou o desenvolvimento na fase adulta intermediária, destacando mudanças físicas, emocionais e sociais. Durante a atividade de estações, foi possível explorar diferentes aspectos dessa fase. Segundo Erik Erikson, esse período envolve o conflito entre generatividade e estagnação. A reflexão permitiu compreender que adultos que se sentem produtivos e contribuem com a sociedade tendem a experimentar maior satisfação. Na prática, isso pode ser observado em pessoas envolvidas com família, trabalho e projetos pessoais.'
      },
      {
        id: 'le-vieux',
        title: 'Discussão sobre a música Le Vieux',
        image: '/imagens-museu/35d9bc04-dd96-4b84-8efa-423400ae88de.png',
        description:
          'A atividade consistiu na análise da música Le Vieux, que aborda o envelhecimento e a solidão na velhice. A partir dessa discussão, foi possível refletir sobre aspectos emocionais dessa fase da vida, como isolamento e necessidade de afeto. A atividade contribuiu para desenvolver uma visão mais empática sobre o idoso, compreendendo suas necessidades emocionais. Na prática, evidencia-se a importância de promover inclusão social e valorização da pessoa idosa.'
      },
      {
        id: 'um-senhor-estagiario',
        title: 'Análise do filme Um Senhor Estagiário',
        image: '/imagens-museu/c3618b08-d956-4631-99e3-c9f496a370ff.png',
        description:
          'A atividade envolveu a análise do filme The Intern, que retrata a vida de um idoso que retorna ao mercado de trabalho. O filme aborda temas como envelhecimento ativo, propósito e relações intergeracionais. A reflexão permitiu compreender que a velhice não deve ser associada apenas à inatividade, mas também a novas possibilidades. Essa perspectiva está alinhada com o desenvolvimento humano ao longo da vida, evidenciando que o aprendizado e a participação social podem ocorrer em qualquer idade. Na prática, reforça-se a importância de valorizar o potencial do idoso na sociedade.'
      }
    ]
  }
]
