import { useEffect, useRef, useState, type PropsWithChildren } from 'react'

interface FadeInSectionProps extends PropsWithChildren {
  className?: string
}

export default function FadeInSection({ className = '', children }: FadeInSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentSection = sectionRef.current

    if (!currentSection) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(currentSection)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
    >
      {children}
    </section>
  )
}
