export default function BackToTopButton() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      className="btn-ui btn-ui-neutral text-xs tracking-wide uppercase"
    >
      Voltar ao topo
    </button>
  )
}
