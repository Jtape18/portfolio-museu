import type { KeyboardEvent } from 'react'
import type { PortfolioActivity } from '../../portfolio/types'

interface ActivityCardProps {
  activity: PortfolioActivity
  onOpen: (activityId: string) => void
}

export default function ActivityCard({ activity, onOpen }: ActivityCardProps) {
  const handleOpen = () => onOpen(activity.id)

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen(activity.id)
    }
  }

  return (
    <article
      className="group relative min-h-[420px] cursor-pointer overflow-hidden md:min-h-[600px] lg:min-h-[760px]"
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
    >
      <img
        src={activity.image}
        alt={activity.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
      <div className="absolute right-0 bottom-0 left-0 px-8 pb-8 md:px-10 md:pb-10">
        <h2 className="relative block w-fit origin-left text-lg font-bold text-white transition-transform duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white/90 after:transition-all after:duration-300 after:content-[''] group-hover:scale-105 group-hover:after:w-full md:text-2xl">
          {activity.title}
        </h2>
      </div>
    </article>
  )
}
