export interface PortfolioActivity {
  id: string
  title: string
  image: string
  contentImage?: string
  contentImages?: string[]
  contentImageAlt?: string
  /** Texto exibido abaixo da imagem de conteúdo (ex.: citação). */
  contentImageQuote?: string
  description: string
}

export interface PortfolioDiscipline {
  id: string
  title: string
  subtitle: string
  coverImage: string
  activities: PortfolioActivity[]
}
