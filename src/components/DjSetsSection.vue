<template>
  <section class="sets-section" id="sets">

    <div class="claw-scratch" style="left:-20px; bottom:20%; opacity:0.07; transform: scaleX(-1);">
      <svg width="160" height="280" viewBox="0 0 220 380" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30 10 Q 55 120 45 370" stroke="#9b30ff" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 80 0 Q 105 115 90 365" stroke="#9b30ff" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M 130 20 Q 152 130 135 375" stroke="#9b30ff" stroke-width="4" fill="none" stroke-linecap="round"/>
      </svg>
    </div>

    <p class="section-label">Écouter</p>
    <h2 class="section-title">DJ <span class="grad-text">Sets</span></h2>

    <div class="sets-grid">
      <div v-for="set in sets" :key="set.id" class="set-card">
        <div class="set-thumb">
          <iframe
            class="yt-embed"
            :src="`https://www.youtube.com/embed/${set.youtubeId}?rel=0&modestbranding=1`"
            :title="set.title"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <div class="set-info">
          <p class="set-title">{{ set.title }}</p>
          <p class="set-meta">YouTube · {{ set.date }}</p>
          <span v-for="tag in set.tags" :key="tag" class="set-tag">{{ tag }}</span>
        </div>
      </div>

      <!-- CTA YouTube -->
      <div class="set-card set-cta">
        <p class="set-cta-label">Tous les sets sur YouTube</p>
        <a
          href="https://www.youtube.com/@wolfree95?sub_confirmation=1"
          target="_blank"
          class="yt-btn"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          S'abonner
        </a>
      </div>
    </div>

  </section>
</template>

<script setup>
const sets = [
  {
    id: 1,
    youtubeId: '8RC9CTuvNdk',
    title: 'Den Rhythms - @goodmorningtoulouse',
    date: '24 mars 2026',
    tags: ['Bounce', 'Hard Techno'],
  },
  {
    id: 2,
    youtubeId: '29rJWwyUhao',
    title: 'Rage of the Pack',
    date: '25 oct. 2025',
    tags: ['Hard Techno', 'Hardcore'],
  },
  {
    id: 3,
    youtubeId: '_MGAtqabCog',
    title: 'Rage of the Pack (Twitch version)',
    date: '1 oct. 2025',
    tags: ['Hard Techno', 'Hardcore'],
  },
  {
    id: 4,
    youtubeId: 'ZTgKqcv4E4Q',
    title: 'DJ Set Psytrance - @UnknownProject-p',
    date: '13 sept. 2025',
    tags: ['Psytrance'],
  },
  {
    id: 5,
    youtubeId: 'czlR_HHPhOs',
    title: 'Head Killer ‐ DJ Set',
    date: '13 avr. 2025',
    tags: ['Hard Techno'],
  },
  {
    id: 6,
    youtubeId: 'dXkYHHG2_yY',
    title: 'Dance with me - DJ Set Techno',
    date: '2 mars 2025',
    tags: ['Techno'],
  },
  {
    id: 7,
    youtubeId: 'BhfVIMJQIfY',
    title: 'Wolven Breakbeat Fury',
    date: '11 nov. 2024',
    tags: ['Drum & Bass'],
  },
  {
    id: 8,
    youtubeId: '49ppOD7FfyI',
    title: 'Foundations of Power Hard Techno Legacy',
    date: '12 oct. 2024',
    tags: ['Hard Techno'],
  },
]
</script>

<style scoped>
.sets-section { background: var(--bg3); }
.sets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.set-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden; cursor: pointer;
  transition: transform 0.3s, border-color 0.3s;
}
.set-card:hover { transform: translateY(-4px); border-color: rgba(0,229,255,0.4); }
.set-thumb {
  width: 100%; aspect-ratio: 16/9;
  background: #0a0418; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.yt-embed { width: 100%; height: 100%; border: none; display: block; }
.set-info { padding: 1rem 1.2rem; }
.set-title {
  font-size: 1.25rem; font-weight: 600;
  margin-bottom: 0.3rem; letter-spacing: 0.05em; color: var(--text);
}
.set-meta { font-size: 0.85rem; color: var(--text-dim); letter-spacing: 0.1em; text-transform: uppercase; }
.set-tag {
  display: inline-block; padding: 0.2rem 0.5rem;
  background: rgba(155,48,255,0.055);
  border: 1px solid rgba(155,48,255,0.3);
  font-size: 0.85rem; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--violet);
  margin-right: 0.3rem; margin-top: 0.5rem;
}
.set-cta {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  min-height: 200px; text-align: center; padding: 2rem;
  border-style: dashed;
}
.set-cta-label {
  font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(232,224,255,0.4); margin-bottom: 1.5rem;
}
.yt-btn {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255,26,26,0.4);
  color: #ff6b6b; text-decoration: none;
  font-size: 0.85rem; letter-spacing: 0.2em;
  text-transform: uppercase; font-weight: 600;
  transition: all 0.3s;
  background: rgba(255,26,26,0.05);
}
</style>
