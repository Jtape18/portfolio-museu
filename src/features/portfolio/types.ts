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
