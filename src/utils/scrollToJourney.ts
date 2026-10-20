export function scrollToJourneyProgress(progress: number, behavior: ScrollBehavior = 'smooth') {
  const track = document.getElementById('recorrido');
  if (!track) return false;
  const top = track.getBoundingClientRect().top + window.scrollY;
  const distance = track.offsetHeight - window.innerHeight;
  window.scrollTo({ top: top + distance * progress, behavior });
  return true;
}
