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
        description: 'Reflexão sobre propósito de vida e convergência entre valores, vocação e contribuição social.'
      },
      {
        id: 'filme-soul',
        title: 'Atividade - Filme Soul',
        image: '/imagens-museu/43c018c2-8019-481a-bec3-f871d4d82b2f.png',
        description: 'Análise dos sentidos de propósito e plenitude a partir da narrativa do filme.'
      },
      {
        id: 'reportagem',
        title: 'Atividade - Reportagem',
        image: '/imagens-museu/d10d0778-8359-440b-a3ee-7bb11d884093.png',
        description: 'Articulação de conceitos da disciplina com um conteúdo jornalístico de relevância social.'
      },
      {
        id: 'perma',
        title: 'Aula sobre Modelo PERMA',
        image: '/imagens-museu/e9c05887-fb2f-429d-9849-8a4ac73a7611.png',
        description: 'Síntese dos pilares do PERMA e da aplicação prática para qualidade de vida.'
      },
      {
        id: 'circulo-apoio',
        title: 'Relacionamentos Positivos + Círculo de Apoio',
        image: '/imagens-museu/5361233f-6538-48eb-9a02-84a470f45dcb.png',
        description: 'Mapeamento de redes de apoio e impacto dos vínculos no desenvolvimento humano.'
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
        description: 'Discussão crítica sobre marcadores sociais, prevenção e enfrentamento da violência.'
      },
      {
        id: 'voce-e-o-que-come',
        title: 'Documentário: Você é o que você come',
        image: '/imagens-museu/09d47cbb-4a66-4f13-9a47-86e2d35da50e.png',
        description: 'Relação entre hábitos de vida, saúde e desenvolvimento ao longo do ciclo vital.'
      },
      {
        id: 'adulto-intermediario',
        title: 'Aula sobre Adulto Intermediário (estações)',
        image: '/imagens-museu/b42ee780-8428-477a-94d2-cfaa12bf953f.png',
        description: 'Aprendizagem ativa sobre desafios e transformações da fase adulta intermediária.'
      },
      {
        id: 'le-vieux',
        title: 'Discussão sobre a música Le Vieux',
        image: '/imagens-museu/35d9bc04-dd96-4b84-8efa-423400ae88de.png',
        description: 'Reflexão sobre envelhecimento, identidade e sentidos da velhice na cultura.'
      },
      {
        id: 'um-senhor-estagiario',
        title: 'Análise do filme Um Senhor Estagiário',
        image: '/imagens-museu/c3618b08-d956-4631-99e3-c9f496a370ff.png',
        description: 'Articulação de aspectos geracionais, trabalho e vínculos afetivos na vida adulta.'
      }
    ]
  }
]
