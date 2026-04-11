// useParallax.js
// Approche simple : on accède aux éléments via le DOM directement
// après que tout est monté, comme dans le HTML vanilla original.

export function useParallax() {
  const lerp  = (a, b, t) => a + (b - a) * t
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

  const isMobile = window.matchMedia('(max-width: 768px)').matches

  let mouseX = 0, mouseY = 0
  let orbX = 0, orbY = 0
  let rawX = window.innerWidth / 2
  let rawY = window.innerHeight / 2
  let scrollY = 0
  let smoothScrollY = 0
  let rafId = null
  let stars = []

  // Éléments DOM — récupérés après le mount
  let moon, orb, heroLogo, heroName, heroTagline
  let grid3d, mtn1, mtn2, mtn3
  let cross1, cross2, cross3, decoCircle
  let wrapper, starField

  function updateMaxScroll() {
    if (!wrapper) wrapper = document.getElementById('smooth-wrapper')
    if (!wrapper) return
    document.body.style.height = wrapper.scrollHeight + 'px'
  }

  function initStars() {
    starField = document.getElementById('star-field')
    if (!starField) return

    const STAR_COUNT = isMobile ? 40 : 120
    starField.innerHTML = ''
    stars = []

    for (let i = 0; i < STAR_COUNT; i++) {
      const el      = document.createElement('div')
      el.className  = 'star'
      const size    = Math.random() * 2.5 + 0.5
      const x       = Math.random() * 100
      const y       = Math.random() * 100
      const depth   = Math.random()
      const speed   = 0.002 + depth * 0.018
      const opacity = 0.15 + depth * 0.65
      const twinkle = Math.random() * 4 + 2
      el.style.cssText = `
        width:${size}px; height:${size}px;
        left:${x}%; top:${y}%;
        opacity:${opacity};
        animation: twinkle ${twinkle}s ease-in-out infinite alternate;
        animation-delay:${Math.random() * 5}s;
      `
      starField.appendChild(el)
      stars.push({ el, depth, speed })
    }

    if (!document.getElementById('twinkleKf')) {
      const s = document.createElement('style')
      s.id = 'twinkleKf'
      s.textContent = `
        @keyframes twinkle {
          from { opacity: 0.2; transform: scale(1); }
          to   { opacity: 0.8; transform: scale(1.4); }
        }
      `
      document.head.appendChild(s)
    }
  }

  function grabElements() {
    wrapper      = document.getElementById('smooth-wrapper')
    moon         = document.getElementById('parallax-moon')
    orb          = document.getElementById('hero-orb')
    heroLogo     = document.getElementById('hero-logo')
    heroName     = document.getElementById('hero-name')
    heroTagline  = document.getElementById('hero-tagline')
    grid3d       = document.getElementById('grid-3d')
    mtn1         = document.getElementById('mtn1')
    mtn2         = document.getElementById('mtn2')
    mtn3         = document.getElementById('mtn3')
    cross1       = document.getElementById('cross1')
    cross2       = document.getElementById('cross2')
    cross3       = document.getElementById('cross3')
    decoCircle   = document.getElementById('deco-circle')
  }

  function tick() {
    smoothScrollY = isMobile ? scrollY : lerp(smoothScrollY, scrollY, 0.06)
    const sy = smoothScrollY

    if (!isMobile && wrapper) {
      wrapper.style.transform = `translateY(${-sy}px)`
    }

    if (orb) {
      orbX = lerp(orbX, rawX - window.innerWidth  / 2, 0.04)
      orbY = lerp(orbY, rawY - window.innerHeight / 2, 0.04)
      orb.style.transform = `translate(calc(-50% + ${orbX * 0.3}px), calc(-50% + ${orbY * 0.3}px))`
    }

    if (moon) {
      moon.style.transform = `translate(${mouseX * 12}px, ${mouseY * 8 + sy * 0.12}px)`
    }

    if (grid3d) {
      grid3d.style.transform = `scale(${1 + sy * 0.0004})`
      grid3d.style.opacity   = clamp(1 - sy / 600, 0, 0.07)
    }

    if (mtn1) mtn1.style.transform = `translateY(${sy * 0.45}px)`
    if (mtn2) mtn2.style.transform = `translateY(${sy * 0.32}px)`
    if (mtn3) mtn3.style.transform = `translateY(${sy * 0.15}px)`

    if (heroLogo) {
      const t = clamp(sy / 500, 0, 1)
      heroLogo.style.transform = `translateY(${-sy * 0.25}px) scale(${1 - t * 0.25})`
      heroLogo.style.opacity   = 1 - t * 0.8
    }
    if (heroName)    heroName.style.transform    = `translateY(${-sy * 0.15}px)`
    if (heroTagline) heroTagline.style.transform = `translateY(${-sy * 0.1}px)`

    stars.forEach(s => {
      const dx = mouseX * s.speed * 60 * s.depth
      const dy = mouseY * s.speed * 60 * s.depth + sy * s.speed * 0.8
      s.el.style.transform = `translate(${dx}px, ${dy}px)`
    })

    if (cross1) cross1.style.transform = `translateY(${sy * 0.25 + mouseY * 10}px) translateX(${mouseX * 6}px)`
    if (cross2) cross2.style.transform = `translateY(${sy * 0.15 + mouseY * -8}px) translateX(${mouseX * -10}px)`
    if (cross3) cross3.style.transform = `translateY(${sy * 0.35 + mouseY * 14}px)`

    if (decoCircle) {
      if (isMobile) {
        decoCircle.style.display = 'none'
      } else {
        decoCircle.style.transform = `translateY(${sy * 0.2}px) rotate(${sy * 0.05 + Date.now() * 0.005}deg)`
      }
    }

    rafId = requestAnimationFrame(tick)
  }

  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        } else {
          entry.target.style.opacity = '0'
          entry.target.style.transform = 'translateY(20px)'
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll(
      '.set-card, .style-card, .press-item, .date-item, .b2b-card, .social-link, .gallery-item'
    ).forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })
  }

  function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'))
        if (!target) return
        e.preventDefault()
        window.scrollTo(0, target.offsetTop)
      })
    })
  }

  function startParallax() {
    // Récupère tous les éléments DOM
    grabElements()
    // Crée les étoiles
    initStars()
    // Calcule la hauteur scrollable
    updateMaxScroll()
    // Liens d'ancre
    initAnchorLinks()

    window.addEventListener('resize', updateMaxScroll)
    window.addEventListener('scroll', () => { scrollY = window.scrollY }, { passive: true })
    window.addEventListener('touchmove', () => { scrollY = window.scrollY }, { passive: true })
    document.addEventListener('mousemove', (e) => {
      rawX = e.clientX
      rawY = e.clientY
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    })

    setTimeout(updateMaxScroll, 500)
    setTimeout(updateMaxScroll, 1500)
    setTimeout(initScrollReveal, 100)

    rafId = requestAnimationFrame(tick)
  }

  return { startParallax, isMobile }
}
