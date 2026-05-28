<template>
  <section class="gallery-section" id="galerie">

    <div class="dot-texture">
      <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dotFadeGal" cx="30%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#9b30ff" stop-opacity="0.16"/>
            <stop offset="60%" stop-color="#00e5ff" stop-opacity="0.06"/>
            <stop offset="100%" stop-color="#00e5ff" stop-opacity="0"/>
          </radialGradient>
          <pattern id="dotsGal" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1.2" fill="url(#dotFadeGal)"/>
          </pattern>
        </defs>
        <rect width="1440" height="800" fill="url(#dotsGal)"/>
      </svg>
    </div>

    <div class="claw-scratch" style="right:4%; top:5%; opacity:0.1; transform:rotate(-8deg);">
      <svg width="150" height="280" viewBox="0 0 220 380" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="clawGal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00e5ff"/>
            <stop offset="100%" stop-color="#9b30ff"/>
          </linearGradient>
        </defs>
        <path d="M 25 8 Q 52 125 38 372" stroke="url(#clawGal)" stroke-width="6.5" fill="none" stroke-linecap="round"/>
        <path d="M 88 0 Q 112 118 95 368" stroke="url(#clawGal)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M 150 16 Q 170 128 155 375" stroke="url(#clawGal)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      </svg>
    </div>

    <p class="section-label">Galerie</p>
    <h2 class="section-title">La <span class="grad-text">Tanière</span> en Images</h2>

    <div class="gallery-grid">
      <div
        v-for="(photo, index) in photos"
        :key="photo.id"
        class="gallery-item"
        :class="photo.size"
        @click="openLightbox(index)"
      >
        <img :src="photo.src" :alt="photo.alt">
        <div class="gallery-item-overlay"></div>
        <div class="gallery-item-frame"></div>
        <span class="gallery-item-caption">{{ photo.caption }}</span>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useLightbox } from '@/composables/useLightbox'

const { open } = useLightbox()

const photos = [
  { id: 1, src: new URL('@/assets/photo-mix.png', import.meta.url).href,           alt: 'WOLFREE Little O\'Clock', caption: 'Little O\'Clock',           size: 'tall' },
  { id: 2, src: new URL('@/assets/photo-session.png', import.meta.url).href,       alt: 'Session',                 caption: 'Before Fête de la musique', size: '' },
  { id: 3, src: new URL('@/assets/photo-soiree.png', import.meta.url).href,        alt: 'Soirée',                  caption: 'Soirée privée',             size: '' },
  { id: 4, src: new URL('@/assets/photo-shooting.png', import.meta.url).href,      alt: 'Shooting',                caption: 'Le shooting',               size: 'tall' },
  { id: 5, src: new URL('@/assets/photo-concentration.png', import.meta.url).href, alt: 'Concentration',           caption: 'Psytrance',                 size: '' },
  { id: 6, src: new URL('@/assets/photo-littleoclock.png', import.meta.url).href,  alt: 'Little O\'Clock',         caption: 'Live @ Little O\'Clock',    size: '' },
  { id: 7, src: new URL('@/assets/Station-up.jpeg', import.meta.url).href,         alt: 'Station',                 caption: 'Live @ Station',            size: 'tall' },
  { id: 8, src: new URL('@/assets/Station-profil.jpeg', import.meta.url).href,     alt: 'Station',                 caption: 'Live @ Station',            size: 'tall' },
  { id: 9, src: new URL('@/assets/Station-down.jpeg', import.meta.url).href,       alt: 'Station',                 caption: 'Live @ Station',            size: 'wide' },
  { id: 10, src: new URL('@/assets/Station-foule.jpeg', import.meta.url).href,     alt: 'Station',                 caption: 'Live @ Station',            size: '' },
  { id: 12, src: new URL('@/assets/Little-3-pictures.jpeg', import.meta.url).href, alt: 'Little O\'Clock',         caption: 'Live @ Little O\'Clock',    size: 'tall' },
  { id: 11, src: new URL('@/assets/Little-joy.jpeg', import.meta.url).href,        alt: 'Little O\'Clock',         caption: 'Live @ Little O\'Clock',    size: '' },
]

function openLightbox(index) {
  open(photos.map(p => p.src), index)
}
</script>

<style scoped>
.gallery-section { background: var(--bg2); }
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 220px;
  gap: 16px;
  max-width: 1300px;
}
.gallery-item {
  position: relative;
  overflow: visible;
  cursor: pointer;
}
.gallery-item.tall  { grid-row: span 2; }
.gallery-item.wide  { grid-column: span 2; }
.gallery-item.small { grid-row: span 1; }

.gallery-item-frame {
  position: absolute; inset: -10px;
  border: 1px solid transparent;
  background: linear-gradient(var(--bg2), var(--bg2)) padding-box, var(--grad) border-box;
  pointer-events: none; z-index: 2;
  clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
  transition: inset 0.4s ease;
}
.gallery-item:hover .gallery-item-frame { inset: -14px; }

.gallery-item img {
  position: relative; z-index: 3;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center center;
  display: block;
  filter: grayscale(10%) contrast(1.05) brightness(0.92);
  transition: filter 0.5s ease, transform 0.5s ease;
}
.gallery-item:hover img {
  filter: grayscale(0%) contrast(1.1) brightness(1);
  transform: scale(1.03);
}
.gallery-item-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(155,48,255,0.45) 0%, rgba(0,229,255,0.1) 40%, transparent 70%);
  opacity: 0; transition: opacity 0.4s ease; z-index: 4;
}
.gallery-item:hover .gallery-item-overlay { opacity: 1; }

.gallery-item-caption {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 1rem 1.2rem 0.8rem;
  font-size: 0.65rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: rgba(232,224,255,0.9);
  font-weight: 600; opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  z-index: 4;
}
.gallery-item:hover .gallery-item-caption { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
  .gallery-item.wide { grid-column: span 2; }
}
@media (max-width: 500px) {
  .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 250px; }
  .gallery-item.wide, .gallery-item.tall { grid-column: span 1; grid-row: span 1; }
}
</style>
