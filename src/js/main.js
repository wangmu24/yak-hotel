import { initNav } from './nav.js'

initNav()

// Hero bg animation
const heroBg = document.getElementById('heroBg')
const heroContent = document.getElementById('heroContent')

const heroImages = [
  'images/namche_panaroma.jpg',
  'images/stupa.jpg'
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
