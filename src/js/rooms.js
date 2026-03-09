import { initNav } from './nav.js'
initNav()

// Animate page hero bg
const bg = document.getElementById('pageHeroBg')
if (bg) setTimeout(() => bg.classList.add('loaded'), 100)
