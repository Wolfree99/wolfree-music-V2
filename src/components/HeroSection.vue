<template>
  <section class="hero" id="hero">
    <div class="hero-bg"></div>

    <div class="grid-3d" id="grid-3d">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0"    y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="180"  y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="360"  y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="540"  y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="720"  y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.8"/>
        <line x1="900"  y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="1080" y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="1260" y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="1440" y1="0" x2="720" y2="900" stroke="#9b30ff" stroke-width="0.5"/>
        <line x1="0" y1="150" x2="1440" y2="150" stroke="#9b30ff" stroke-width="0.4" opacity="0.6"/>
        <line x1="0" y1="300" x2="1440" y2="300" stroke="#9b30ff" stroke-width="0.4" opacity="0.5"/>
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#9b30ff" stroke-width="0.4" opacity="0.4"/>
        <line x1="0" y1="600" x2="1440" y2="600" stroke="#9b30ff" stroke-width="0.4" opacity="0.3"/>
        <line x1="0" y1="750" x2="1440" y2="750" stroke="#9b30ff" stroke-width="0.4" opacity="0.2"/>
      </svg>
    </div>

    <div class="hero-orb" id="hero-orb"></div>

    <div class="mountain-layer" id="mtn1" style="z-index:1;opacity:0.5;">
      <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,300 180,80 320,200 480,40 620,180 780,20 920,150 1100,60 1280,160 1440,80 1440,300" fill="rgb(12 7 37 / 88%)"/>
      </svg>
    </div>
    <div class="mountain-layer" id="mtn2" style="z-index:2;opacity:1;">
      <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,300 240,140 420,220 600,90 780,200 960,110 1140,180 1320,120 1440,160 1440,300" fill="rgb(19 16 35)"/>
      </svg>
    </div>
    <div class="mountain-layer" id="mtn3" style="z-index:3;opacity:1;">
      <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,300 100,200 200,260 340,150 460,240 580,170 740,230 860,160 940,210 1060,175 1180,225 1300,180 1440,200 1440,300" fill="rgb(19 13 43)"/>
      </svg>
    </div>

    <!-- <div class="claw-scratch" style="right:-30px; top:15%; opacity:0.12;">
      <svg width="220" height="380" viewBox="0 0 220 380" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="clawG1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00e5ff"/>
            <stop offset="100%" stop-color="#9b30ff"/>
          </linearGradient>
        </defs>
        <path d="M 30 10 Q 55 120 45 370" stroke="url(#clawG1)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 80 0 Q 105 115 90 365" stroke="url(#clawG1)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M 130 20 Q 152 130 135 375" stroke="url(#clawG1)" stroke-width="4" fill="none" stroke-linecap="round"/>
      </svg>
    </div> -->

    <img src="@/assets/Wolfree-nbg.png" alt="WOLFREE" id="hero-logo" class="hero-logo fade-up fade-up-1">
    <h1 id="hero-name" class="hero-name fade-up fade-up-2">WOLFREE</h1>
    <p id="hero-tagline" class="hero-tagline fade-up fade-up-3">DJ · Toulouse · Electro Techno Music</p>

    <div class="hero-genres fade-up fade-up-4">
      <span v-for="genre in genres" :key="genre" class="genre-pill">{{ genre }}</span>
    </div>

    <div class="hero-btns fade-up fade-up-5">
      <a href="#sets" class="btn-primary">Écouter les sets</a>
      <a href="#contact" class="btn-outline">Booking</a>
    </div>

    <div class="scroll-ind">
      <p>Descendre</p>
      <span></span>
    </div>
  </section>
</template>

<script setup>
const genres = ['Techno', 'Bounce', 'Hard Techno', 'Hard Core', 'Psytrance', 'Drum & Bass', 'Acid']
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  text-align: center; padding: 8rem 2rem 4rem;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 50% 60%, rgba(155,48,255,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,229,255,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 30% 30% at 80% 20%, rgba(214,0,255,0.07) 0%, transparent 60%);
  pointer-events: none;
}
.hero-orb {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(155,48,255,0.09) 0%, transparent 70%);
  animation: pulse 8s ease-in-out infinite;
  pointer-events: none;
  will-change: transform;
}
.grid-3d {
  position: absolute; inset: 0;
  pointer-events: none;
  opacity: 0.07;
  will-change: transform;
}
.mountain-layer {
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
  pointer-events: none;
  will-change: transform;
}
.mountain-layer svg { display: block; width: 100%; }
.hero-logo {
  width: 140px; height: 140px; object-fit: contain;
  margin-bottom: 2.5rem;
  filter: drop-shadow(0 0 30px rgba(0,229,255,0.45)) drop-shadow(0 0 60px rgba(155,48,255,0.35));
  animation: float 6s ease-in-out infinite;
  position: relative; z-index: 2;
  will-change: transform, opacity;
}
.hero-name {
  font-size: clamp(4rem, 12vw, 9rem);
  font-weight: 700; letter-spacing: 0.4em;
  line-height: 1; text-transform: uppercase;
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative; z-index: 2;
  will-change: transform;
}
.hero-tagline {
  font-size: 1.45rem; letter-spacing: 0.35em;
  text-transform: uppercase; color: var(--text-dim);
  margin-bottom: 3rem; position: relative; z-index: 2;
  font-weight: 400; will-change: transform;
}
.hero-genres {
  display: flex; flex-wrap: wrap; gap: 0.6rem;
  justify-content: center; margin-bottom: 3rem;
  position: relative; z-index: 2;
}
.genre-pill {
  padding: 0.3rem 0.9rem;
  border: 1px solid rgba(0,229,255,0.3);
  border-radius: 1px; font-size: 0.85rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--cyan);
  background: rgba(0,229,255,0.05);
  font-weight: 600; transition: all 0.3s;
}
.genre-pill:hover { background: rgba(0,229,255,0.15); border-color: var(--cyan); }
.hero-btns { display: flex; gap: 1rem; position: relative; z-index: 2; }
.scroll-ind {
  position: absolute; bottom: 2rem; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column;
  align-items: center; gap: 0.4rem;
  z-index: 10; opacity: 0.4;
  animation: bounce 2s infinite;
}
.scroll-ind span { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--cyan), transparent); }
.scroll-ind p { font-size: 0.85rem; letter-spacing: 0.2em; color: var(--text-dim); text-transform: uppercase; }

@media (max-width: 768px) {
  .hero-name { letter-spacing: 0.15em; }
}
</style>
