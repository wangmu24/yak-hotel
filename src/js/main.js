import { initNav } from './nav.js'

initNav()

// Hero bg animation
const heroBg = document.getElementById('heroBg')
const heroContent = document.getElementById('heroContent')

// Set hero background from Wix or fallback
const heroImages = [
  'https://static.wixstatic.com/media/32075a_ac0789c16f6b4ffdbcea59cccd217d66~mv2.jpeg/v1/fill/w_1920,h_1200,al_c,q_85/32075a_ac0789c16f6b4ffdbcea59cccd217d66~mv2.jpeg',
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80'
]

let imgLoaded = false
heroImages.forEach((src, i) => {
  if (imgLoaded) return
  const img = new Image()
  img.onload = () => {
    if (!imgLoaded) {
      imgLoaded = true
      heroBg.style.backgroundImage = `url('${src}')`
      setTimeout(() => heroBg.classList.add('loaded'), 100)
    }
  }
  img.src = src
})

// Show hero content
setTimeout(() => heroContent.classList.add('visible'), 200)

// Parallax on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY
  if (heroBg) {
    heroBg.style.transform = `scale(1) translateY(${scrolled * 0.3}px)`
  }
}, { passive: true })
