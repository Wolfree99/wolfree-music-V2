<template>
  <section class="styles-section" id="styles">
    <p class="section-label">Répertoire</p>
    <h2 class="section-title">Styles <span class="grad-text">Musicaux</span></h2>

    <div class="styles-grid">
      <div v-for="style in styles" :key="style.name" class="style-card">
        <span class="style-bpm">{{ style.bpm }}</span>
        <p class="style-name">{{ style.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const styles = [
  { name: 'Techno',      bpm: '135–150 BPM' },
  { name: 'Bounce',      bpm: '140–180 BPM' },
  { name: 'Hard Techno', bpm: '145–180 BPM' },
  { name: 'Hard Core',   bpm: '160–200 BPM' },
  { name: 'Psytrance',   bpm: '145–170 BPM' },
  { name: 'Drum n Bass', bpm: '165–180 BPM' },
  { name: 'Acid',        bpm: '145–160 BPM' },
]
</script>

<style scoped>
.styles-section { background: var(--bg); }
.styles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem; width: 100%;
}
.style-card {
  padding: 1.5rem; border: 1px solid var(--border);
  background: var(--surface); text-align: center;
  transition: all 0.3s; position: relative; overflow: hidden;
}
.style-card::before {
  content: ''; position: absolute; inset: 0;
  background: var(--grad); opacity: 0; transition: opacity 0.3s;
}
.style-card:hover::before { opacity: 0.08; }
.style-card:hover { border-color: var(--violet); }
.style-bpm {
  font-size: 0.85rem; letter-spacing: 0.2em;
  color: var(--cyan); text-transform: uppercase;
  margin-bottom: 0.5rem; display: block; position: relative;
}
.style-name {
  font-size: 1rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase; position: relative;
}
</style>
