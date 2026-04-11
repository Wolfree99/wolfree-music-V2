<template>
  <section id="b2b">
    <p class="section-label">Collaborations</p>
    <h2 class="section-title">B2B <span class="grad-text">&amp; Meute</span></h2>
    <p class="b2b-intro">WOLFREE mixe aussi en duo — en meute, l'énergie se décuple.<br>Ses compagnons de platines :</p>

    <div class="b2b-grid">
      <div v-for="artist in artists" :key="artist.initials" class="b2b-card">
        <div class="b2b-avatar">{{ artist.initials }}</div>
        <div>
          <p class="b2b-name">{{ artist.name }}</p>
          <p class="b2b-desc">{{ artist.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const artists = [
  { initials: 'FS', name: 'FOXSICK',  desc: 'B2B · Artiste · Best Friend' },
  { initials: 'NZ', name: 'Naz',      desc: 'B2B · Artiste · Ami & Mentor' },
  { initials: 'XX', name: 'XXXXXX',   desc: 'B2B · Artiste · Ancien colloc de Sköne' },
  { initials: 'TO', name: 'Théo',     desc: 'B2B · Artiste · Membre BDE (ESD)' },
]
</script>

<style scoped>
#b2b { background: var(--bg2); }
.b2b-intro {
  color: rgba(232,224,255,0.5); font-size: 1rem;
  margin-bottom: 2rem; line-height: 1.8; max-width: 600px;
}
.b2b-grid {
  display: flex; flex-wrap: wrap; gap: 1rem;
  justify-content: start; margin-top: 1rem;
}
.b2b-card {
  display: inline-flex; align-items: center; gap: 2rem;
  padding: 2rem; border: 1px solid var(--border);
  background: var(--surface); width: 400px;
}
.b2b-avatar {
  width: 70px; height: 70px; border-radius: 50%;
  background: var(--grad); display: flex;
  align-items: center; justify-content: center;
  font-size: 1.4rem; font-weight: 700; color: #fff; flex-shrink: 0;
}
.b2b-name { font-size: 1.3rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
.b2b-desc { font-size: 0.85rem; color: var(--text-dim); letter-spacing: 0.1em; margin-top: 0.3rem; text-transform: uppercase; }
</style>
