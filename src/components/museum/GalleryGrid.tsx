interface GalleryItem {
  image: string
  title: string
  subtitle?: string
}

interface GalleryGridProps {
  items: [GalleryItem, GalleryItem]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <section className="flex w-full flex-col md:flex-row">
      {items.map((item) => (
        <article
          key={item.title}
          className="relative min-h-[400px] flex-1 overflow-hidden md:min-h-[700px] lg:min-h-[900px] group cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
          <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-14 md:pb-14">
            <h2 className="text-base font-bold tracking-wide text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-lg">
              {item.title}
            </h2>
            {item.subtitle && (
              <p className="mt-1 text-sm font-normal text-white/90 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-base">
                {item.subtitle}
              </p>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}
