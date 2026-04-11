<template>
  <section class="press-section" id="press">
    <p class="section-label">Presse &amp; Booking</p>
    <h2 class="section-title">Press <span class="grad-text">Kit</span></h2>
    <p class="press-intro">Tout ce qu'il te faut pour booker ou parler de WOLFREE :</p>

    <div class="press-grid">
      <div v-for="item in pressItems" :key="item.title" class="press-item">
        <div class="press-item-icon">{{ item.icon }}</div>
        <p class="press-item-title">{{ item.title }}</p>
        <p class="press-item-desc">{{ item.desc }}</p>
      </div>
    </div>

    <p class="press-contact">
      Press kit complet :
      <a href="mailto:mat.com.snow@gmail.com">mat.com.snow@gmail.com</a>
    </p>
  </section>
</template>

<script setup>
const pressItems = [
  {
    icon: '🐺',
    title: 'Biographie',
    desc: 'Texte court et long format, en français. Disponible sur demande.',
  },
  {
    icon: '🎨',
    title: 'Logo & Visuels',
    desc: 'Logos HD, déclinaisons fond transparent, couleur, N&B. Sur demande.',
  },
  {
    icon: '📸',
    title: 'Photos Presse',
    desc: 'Photos haute résolution disponibles pour affiches, flyers et supports com.',
  },
  {
    icon: '🎛️',
    title: 'Tech Rider',
    desc: 'De la Pioneer DDJ FLX4 et + jusqu\'aux CDJ-3000 / DJM-900. Détail complet sur demande.',
  },
]
</script>

<style scoped>
.press-section { background: var(--bg3); }
.press-intro {
  color: rgba(232,224,255,0.5); font-size: 1.1rem;
  margin-bottom: 2.5rem; line-height: 1.8; max-width: 600px;
}
.press-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem; width: 100%;
}
.press-item {
  padding: 1.5rem; border: 1px solid var(--border);
  background: var(--surface); transition: all 0.3s;
}
.press-item:hover { border-color: var(--violet); }
.press-item-icon {
  width: 40px; height: 40px;
  background: rgba(155,48,255,0.15);
  border: 1px solid rgba(155,48,255,0.3);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem; font-size: 1.2rem;
}
.press-item-title {
  font-size: 1.2rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.3rem;
}
.press-item-desc { font-size: 1rem; color: var(--text-dim); line-height: 1.6; }
.press-contact {
  margin-top: 2.5rem; font-size: 1rem;
  color: rgba(232,224,255,0.35); letter-spacing: 0.1em;
}
.press-contact a { color: rgba(0,229,255,0.6); text-decoration: none; }
</style>
