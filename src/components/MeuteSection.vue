<template>
  <section class="meute-section" id="meute">

    <div class="dot-texture">
      <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dotFadeMeute" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00e5ff" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="#00e5ff" stop-opacity="0"/>
          </radialGradient>
          <pattern id="dotsMeute" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="url(#dotFadeMeute)"/>
          </pattern>
        </defs>
        <rect width="1440" height="500" fill="url(#dotsMeute)"/>
      </svg>
    </div>

    <div class="claw-scratch" style="right:8%; top:10%; opacity:0.09; transform:rotate(-5deg);">
      <svg width="120" height="220" viewBox="0 0 220 380" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30 10 Q 55 120 45 370" stroke="#00e5ff" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 90 0 Q 115 115 98 365" stroke="#00e5ff" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M 148 20 Q 168 130 152 375" stroke="#00e5ff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>
    </div>

    <p class="section-label">La Meute</p>
    <h2 class="section-title">Suivre <span class="grad-text">WOLFREE</span></h2>
    <p class="meute-intro">Rejoins la meute — lives, sets, coulisses :</p>

    <div class="socials-grid">
      <a v-for="link in socials" :key="link.label" :href="link.url" target="_blank" class="social-link">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" v-html="link.icon"></svg>
        <span>{{ link.label }}</span>
        <span v-if="link.sub" class="social-sub">{{ link.sub }}</span>
      </a>
    </div>

  </section>
</template>

<script setup>
const socials = [
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@wolfree95?sub_confirmation=1',
    icon: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
  },
  {
    label: 'SoundCloud',
    url: 'https://soundcloud.com/wolfree99',
    icon: '<path d="M11.56 8.87V17h8.76c.96 0 1.68-.78 1.68-1.68 0-.9-.66-1.62-1.56-1.68.06-.24.06-.42.06-.66 0-2.1-1.74-3.84-3.84-3.84-.54 0-1.08.12-1.56.3-.42-1.2-1.56-2.04-2.94-2.1-.36 0-.66.03-.66.03zM0 15.24C0 16.2.84 17 1.86 17h1.2V12c-.36-.06-.72-.12-1.08-.12C.9 11.88 0 12.96 0 15.24zM4.44 11.58V17h6.12V8.7c-.18-.06-.42-.06-.6-.06-2.76 0-5.04 1.32-5.52 2.94z"/>',
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/user/31ljnjvosjpjbn65bp2wsywk2l3e?si=a35b0bb7e461425e',
    icon: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>',
  },
  {
    label: '@wolfree__',
    sub: '(DJ)',
    url: 'https://www.instagram.com/wolfree__/',
    icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
  },
  {
    label: '@mathieu_cbbt',
    sub: '(Perso)',
    url: 'https://www.instagram.com/mathieu_cbbt/',
    icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
  },
  {
    label: 'E-mail',
    url: 'mailto:mat.com.snow@gmail.com',
    icon: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
  },
]
</script>

<style scoped>
.meute-section { background: var(--bg); }
.meute-intro {
  color: rgba(232,224,255,0.5); font-size: 1.1rem;
  margin-bottom: 2.5rem; line-height: 1.8;
}
.socials-grid { display: flex; flex-wrap: wrap; gap: 1rem; }
.social-link {
  display: flex; align-items: center; gap: 0.8rem;
  padding: 0.9rem 1.5rem; border: 1px solid var(--border);
  background: var(--surface); text-decoration: none;
  color: var(--text); font-size: 0.85rem;
  letter-spacing: 0.15em; text-transform: uppercase;
  font-weight: 600; transition: all 0.3s;
}
.social-link:hover { border-color: var(--cyan); color: var(--cyan); background: rgba(0,229,255,0.05); }
.social-sub { font-size: 0.75rem; opacity: 0.6; margin-left: 4px; }
</style>
