import GalleryGrid from '../components/museum/GalleryGrid'
import GallerySection from '../components/museum/GallerySection'
import century17Image from '../assets/museum/17th-century.jpg'
import century18Image from '../assets/museum/18th-century.jpg'
import century19Image from '../assets/museum/19th-century.jpg'
import century20Image from '../assets/museum/20th-century.jpg'
import asianPavilionImage from '../assets/museum/asian-pavilion.jpg'
import galleryOfHonourImage from '../assets/museum/gallery-of-honour.jpg'
import heroImage from '../assets/museum/hero.jpg'
import middleAgesRenaissanceImage from '../assets/museum/middle-ages-renaissance.jpg'
import nightWatchGalleryImage from '../assets/museum/night-watch-gallery.jpg'
import specialCollectionsImage from '../assets/museum/special-collections.jpg'

interface GalleryEntry {
  image: string
  title: string
  subtitle?: string
}

const gallerySections: Record<string, GalleryEntry> = {
  nightWatch: {
    image: nightWatchGalleryImage,
    title: 'Night Watch Gallery',
    subtitle: 'The heart of the museum'
  },
  galleryOfHonour: {
    image: galleryOfHonourImage,
    title: 'Gallery of Honour',
    subtitle: 'The best of the best'
  },
  century17: {
    image: century17Image,
    title: '17th Century',
    subtitle: '1600-1700'
  },
  century18: {
    image: century18Image,
    title: '18th Century',
    subtitle: '1700-1800'
  },
  century19: {
    image: century19Image,
    title: '19th Century',
    subtitle: '1800-1900'
  },
  century20: {
    image: century20Image,
    title: '20th Century',
    subtitle: '1900-2000'
  },
  middleAges: {
    image: middleAgesRenaissanceImage,
    title: 'Middle Ages and Renaissance',
    subtitle: '1100-1600'
  },
  specialCollections: {
    image: specialCollectionsImage,
    title: 'Special Collections'
  },
  asianPavilion: {
    image: asianPavilionImage,
    title: 'Asian Pavilion'
  }
}

export default function MuseumPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea]" id="collection">
      <section className="relative min-h-[80vh] w-full overflow-hidden md:min-h-screen">
        <img src={heroImage} alt="Inside the museum" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70" />

        <div className="absolute right-0 bottom-0 left-0 px-8 pb-10 md:px-20 md:pb-14">
          <h1 className="text-5xl leading-tight font-bold text-white uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl lg:text-[7rem]">
            Inside the museum
          </h1>
          <p className="mt-2 text-base font-normal text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] md:text-lg">
            What is inside the Rijksmuseum?
          </p>
        </div>
      </section>

      <section className="max-w-4xl px-8 py-14 md:px-20 md:py-16" id="visit">
        <p className="mb-6 text-base leading-relaxed text-[#1f3a4d] md:text-xl">
          With 8,000 objects, we tell the story of 800 years of Dutch art and history. We take you from the Middle
          Ages to Mondrian. We do this in the historic castle-like building with the Gallery of Honour at its center.
        </p>
        <a
          href="#tickets"
          className="inline-block rounded-sm bg-[#d4562f] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b8411f] md:text-base"
        >
          Book a visit
        </a>
      </section>

      <GallerySection {...gallerySections.nightWatch} />
      <GallerySection {...gallerySections.galleryOfHonour} />
      <GallerySection {...gallerySections.century17} />

      <GalleryGrid items={[gallerySections.century18, gallerySections.century19]} />
      <GalleryGrid items={[gallerySections.century20, gallerySections.middleAges]} />
      <section id="exhibitions">
        <GalleryGrid items={[gallerySections.specialCollections, gallerySections.asianPavilion]} />
      </section>

      <section className="bg-[#0f1115] px-8 py-20 text-center text-white md:px-20" id="tickets">
        <h2 className="text-3xl font-bold uppercase md:text-5xl">Plan your visit</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          Secure your tickets in advance and discover Dutch masterpieces in one unforgettable day in Amsterdam.
        </p>
      </section>
    </div>
  )
}
