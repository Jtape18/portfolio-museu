import type { KeyboardEvent } from 'react'
import type { PortfolioActivity } from '../../portfolio/types'
import { getShortDescription } from '../utils/getShortDescription'

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
        <h2 className="text-lg font-bold text-white md:text-2xl">{activity.title}</h2>
        <p className="mt-1 text-xs text-white/85 md:text-sm">{getShortDescription(activity.description)}</p>
      </div>
    </article>
  )
}
