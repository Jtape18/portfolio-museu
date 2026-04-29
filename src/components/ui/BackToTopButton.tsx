export default function BackToTopButton() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      className="inline-flex items-center rounded-sm border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/85 uppercase transition-colors hover:bg-white/10 hover:text-white"
    >
      Voltar ao topo
    </button>
  )
}
