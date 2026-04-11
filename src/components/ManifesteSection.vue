<template>
  <section class="taniere" id="taniere">

    <div class="dot-texture">
      <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dotFadeTan" cx="80%" cy="30%" r="55%">
            <stop offset="0%" stop-color="#9b30ff" stop-opacity="0"/>
            <stop offset="50%" stop-color="#9b30ff" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#9b30ff" stop-opacity="0.22"/>
          </radialGradient>
          <pattern id="dotsTan" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="11" cy="11" r="1.1" fill="url(#dotFadeTan)"/>
          </pattern>
        </defs>
        <rect width="1440" height="600" fill="url(#dotsTan)"/>
      </svg>
    </div>

    <div class="claw-scratch" style="right:5%; bottom:-10px; opacity:0.13; transform: rotate(-15deg);">
      <svg width="180" height="320" viewBox="0 0 220 380" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="clawG2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00e5ff"/>
            <stop offset="100%" stop-color="#d600ff"/>
          </linearGradient>
        </defs>
        <path d="M 20 5 Q 50 130 30 375" stroke="url(#clawG2)" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M 80 0 Q 108 125 88 370" stroke="url(#clawG2)" stroke-width="5.5" fill="none" stroke-linecap="round"/>
        <path d="M 140 15 Q 162 135 148 378" stroke="url(#clawG2)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M 195 30 Q 210 140 200 380" stroke="url(#clawG2)" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
      </svg>
    </div>

    <div class="taniere-inner">
      <p class="section-label">La Tanière</p>
      <h2 class="section-title">Le <span class="grad-text">Manifeste</span></h2>
      <p class="manifeste-text">
        Je ne joue pas de la musique. <strong>Je libère quelque chose.</strong><br><br>
        Je suis WOLFREE. Né de la nuit, des cimes enneigées et du hurlement silencieux des loups sous la lune.
        Mon univers n'est pas une playlist — c'est un territoire. Un espace où la réalité perd ses contours,
        où le beat devient respiration, où le drop est une chute libre vers soi-même.<br><br>
        Depuis 10 ans, je construis des mondes sonores. <strong>Chaque set est un voyage sans retour possible.</strong>
        Je veux que tu frissonnes. Je veux que tu oublies ton nom, tes doutes, la lumière du soleil.
        Je veux t'emmener là où seuls les loups vont — dans l'obscurité totale et magnifique.<br><br>
        <strong>Bienvenue dans la tanière.</strong>
      </p>
    </div>

  </section>
</template>

<style scoped>
.taniere { background: var(--bg2); }
.taniere::before {
  content: '';
  position: absolute; top: -50%; right: -20%;
  width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.taniere-inner { width: 100%; position: relative; z-index: 1; }
.manifeste-text {
  font-size: clamp(1.05rem, 2vw, 1.45rem);
  line-height: 2; color: var(--text-dim);
  border-left: 2px solid var(--violet);
  padding-left: 2rem;
  font-weight: 300; font-style: italic;
}
.manifeste-text strong { color: var(--text); font-weight: 600; font-style: normal; }
</style>
