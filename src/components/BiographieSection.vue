<template>
  <section id="bio">

    <div class="dot-texture">
      <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dotFadeBio" cx="15%" cy="70%" r="50%">
            <stop offset="0%" stop-color="#00e5ff" stop-opacity="0.18"/>
            <stop offset="60%" stop-color="#00e5ff" stop-opacity="0.06"/>
            <stop offset="100%" stop-color="#00e5ff" stop-opacity="0"/>
          </radialGradient>
          <pattern id="dotsBio" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1.2" fill="url(#dotFadeBio)"/>
          </pattern>
        </defs>
        <rect width="1440" height="700" fill="url(#dotsBio)"/>
      </svg>
    </div>

    <div class="bio-grid">
      <div class="bio-img-wrap">
        <img
          src="@/assets/Station-up.jpeg"
          alt="WOLFREE en action"
          class="bio-img"
        >
        <div class="bio-img-frame"></div>
      </div>

      <div class="bio-content">
        <p class="section-label">Biographie</p>
        <h2 class="section-title">L'<span class="grad-text">Artiste</span></h2>

        <p class="bio-text">
          Il y a dix ans, WOLFREE posait les mains sur ses premières platines. Pas par hasard — par nécessité.
          La musique électro n'était pas un choix, c'était une évidence : un langage plus précis que les mots
          pour dire l'indicible.
        </p>
        <p class="bio-text">
          Formé dans l'underground des soirées privées, il forge son style dans les recoins sombres de la nuit toulousaine.
          Techno Bounce, Hard Techno, Psytrance, Drum n Bass — WOLFREE ne se limite pas à un genre.
          Il construit des trajectoires sonores, des voyages du sol jusqu'aux cimes.
        </p>
        <p class="bio-text">
          Festival privé, bars, soirées — il apporte partout la même intensité : celle d'un loup qui chasse,
          précis, puissant, en mouvement constant. Et parfois, en meute, aux côtés de <strong>FOXSICK</strong>,
          pour pousser les limites encore plus loin.
        </p>
        <p class="bio-text">
          Aujourd'hui, WOLFREE est prêt à franchir l'étape suivante. <strong>Clubs, bars, festivals</strong> —
          la tanière s'agrandit.
        </p>

        <div class="bio-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-box">
            <span class="stat-num">{{ stat.num }}</span>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const stats = [
  { num: '10', label: 'Ans de Mix' },
  { num: '8+', label: 'Sets YouTube' },
  { num: '7',  label: 'Genres' },
]
</script>

<style scoped>
.bio-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: center;
  width: 100%; margin: 0 auto;
}
.bio-img-wrap { position: relative; }
.bio-img {
  width: 100%; aspect-ratio: 3/4;
  object-fit: cover; object-position: center top;
  filter: grayscale(15%) contrast(1.1);
  display: block;
}
.bio-img-frame {
  position: absolute; inset: -12px;
  border: 1px solid transparent;
  background: linear-gradient(var(--bg2), var(--bg2)) padding-box, var(--grad) border-box;
  pointer-events: none;
  clip-path: polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%);
  z-index: -1;
}
.bio-text {
  color: var(--text-dim); line-height: 1.9;
  font-size: 1.25rem; margin-bottom: 2rem; font-weight: 400;
}
.bio-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1rem; margin-top: 2.5rem;
}
.stat-box {
  text-align: center; padding: 1rem;
  border: 1px solid var(--border);
  background: var(--surface);
}
.stat-num {
  font-size: 2rem; font-weight: 700;
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; display: block; line-height: 1.2;
}
.stat-label {
  font-size: 0.95rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--text-dim); margin-top: 0.3rem;
}
@media (max-width: 768px) {
  .bio-grid { grid-template-columns: 1fr; }
}
</style>
