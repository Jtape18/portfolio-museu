export function getShortDescription(text: string, maxLength = 90): string {
  const firstSentence = text.split('. ')[0] ?? text

  if (firstSentence.length > maxLength) {
    return `${firstSentence.slice(0, maxLength)}...`
  }

  return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`
}
