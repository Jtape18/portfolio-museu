interface GallerySectionProps {
  image: string
  title: string
  subtitle?: string
  height?: string
}

export default function GallerySection({
  image,
  title,
  subtitle,
  height = 'min-h-[600px] md:min-h-[800px] lg:min-h-[1000px]'
}: GallerySectionProps) {
  return (
    <section className={`relative w-full overflow-hidden ${height} group cursor-pointer`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
        <h2 className="text-base font-bold tracking-wide text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-lg">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm font-normal text-white/90 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
