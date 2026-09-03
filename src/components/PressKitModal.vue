<template>
  <Teleport to="body">
    <div class="pk-modal" :class="{ open: isOpen }" @click.self="close">
      <div class="pk-panel">

        <!-- Header -->
        <div class="pk-header">
          <div>
            <p class="pk-label">Press Kit</p>
            <h2 class="pk-title">Logos <span class="grad-text">&amp; Visuels</span></h2>
          </div>
          <button class="pk-close" @click="close">✕</button>
        </div>

        <p class="pk-intro">
          Tous les visuels sont libres d'utilisation pour les communications liées aux événements WOLFREE.
          Pour toute autre utilisation : <a href="mailto:mat.com.snow@gmail.com">mat.com.snow@gmail.com</a>
        </p>

        <!-- Filtres -->
        <div class="pk-filters">
          <button
            v-for="cat in categories" :key="cat.id"
            class="pk-filter" :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >{{ cat.label }}</button>
        </div>

        <!-- Grille -->
        <div class="pk-grid">
          <div v-for="asset in filteredAssets" :key="asset.id" class="pk-item">
            <div class="pk-preview" :style="asset.bg ? `background:${asset.bg}` : ''">
              <img v-if="asset.src" :src="asset.src" :alt="asset.title" class="pk-img">
              <div v-else class="pk-placeholder"><span>{{ asset.initials }}</span></div>
              <span class="pk-format">{{ asset.format }}</span>
            </div>
            <div class="pk-info">
              <p class="pk-name">{{ asset.title }}</p>
              <p class="pk-desc">{{ asset.desc }}</p>
            </div>
            <a v-if="asset.downloadUrl" :href="asset.downloadUrl" :download="asset.filename" class="pk-download">
              ↓ Télécharger
            </a>
            <button v-else class="pk-download disabled" @click="requestAsset(asset)">
              Demander par mail
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="pk-footer">
          <p>Des questions ou formats spécifiques ?</p>
          <a href="mailto:mat.com.snow@gmail.com" class="pk-contact-btn">Contacter WOLFREE</a>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])
function close() { emit('close') }

function requestAsset(asset) {
  window.location.href = `mailto:mat.com.snow@gmail.com?subject=Demande visuel — ${asset.title}&body=Bonjour, je souhaite obtenir le visuel "${asset.title}" pour [précise l'usage].`
}

const activeCategory = ref('all')

const categories = [
  { id: 'all',   label: 'Tout' },
  { id: 'logo',  label: 'Logos' },
  { id: 'photo', label: 'Photos' },
  { id: 'cover', label: 'Covers / Bannières' },
]

const assets = [
  {
    id: 1, category: 'logo',
    title: 'Logo Gradient — PNG transparent',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Logo-color.png',
    downloadUrl: '/src/assets/presskit/Logo-color.png',
    filename: 'WOLFREE-logo-color.png', initials: null,
  },
  {
    id: 2, category: 'logo',
    title: 'Logo Gradient — PNG Rounded Black',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Logo-rond-color.png',
    downloadUrl: '/src/assets/presskit/Logo-rond-color.png',
    filename: 'WOLFREE-logo-rond-color.png', initials: null,
  },
  {
    id: 3, category: 'logo',
    title: 'Logo White — PNG Rounded Black',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Logo-rond-white.png', 
    downloadUrl: '/src/assets/presskit/Logo-rond-white.png',
    filename: 'WOLFREE-logo-rond-white.png', initials: null,
  },
  {
    id: 4, category: 'logo',
    title: 'Logo White — PNG transparent',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Logo-white.png', 
    downloadUrl: '/src/assets/presskit/Logo-white.png',
    filename: 'WOLFREE-logo-white.png', initials: null,
  },
  {
    id: 5, category: 'cover',
    title: 'WOLFREE — PNG BANNER',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Wolfree-banner.png',
    downloadUrl: '/src/assets/presskit/Wolfree-banner.png',
    filename: 'WOLFREE-banner.png', initials: null,
  },
  {
    id: 6, category: 'cover',
    title: 'WOLFREE — VERTICAL BANNER',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Wolfree-vertical.png',
    downloadUrl: '/src/assets/presskit/Wolfree-vertical.png',
    filename: 'WOLFREE-vertical.png', initials: null,
  },
  {
    id: 7, category: 'cover',
    title: 'WOLFREE — PHOTO PRESSE',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Wolfree-Banner-YT.png',
    downloadUrl: '/src/assets/presskit/Wolfree-Banner-YT.png',
    filename: 'Wolfree-Banner-YT.png', initials: null,
  },
  {
    id: 8, category: 'cover',
    title: 'WOLFREE — Banner color',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit/Wolfree-typo-2-color.png',
    downloadUrl: '/src/assets/presskit/Wolfree-typo-2-color.png',
    filename: 'Wolfree-typo-2-color.png', initials: null,
  },
  {
    id: 9, category: 'cover',
    title: 'WOLFREE — Banner white',
    desc: null,
    format: 'PNG', bg: '#0d0420',
    src: '/src/assets/presskit//Wolfree-typo-2-white.png',
    downloadUrl: '/src/assets/presskit/Wolfree-typo-2-white.png',
    filename: 'Wolfree-typo-2-white.png', initials: null,
  }
]

const filteredAssets = computed(() =>
  activeCategory.value === 'all'
    ? assets
    : assets.filter(a => a.category === activeCategory.value)
)
</script>

<style scoped>
.pk-modal {
  position: fixed; inset: 0;
  background: rgba(3,1,10,0.92);
  z-index: 11000;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(12px);
  padding: 1rem;
}
.pk-modal.open { opacity: 1; pointer-events: all; }

.pk-panel {
  background: var(--bg2);
  border: 1px solid var(--border);
  width: 100%; max-width: 1000px;
  max-height: 90vh; overflow-y: auto;
  padding: 2.5rem;
  display: flex; flex-direction: column; gap: 1.5rem;
  scrollbar-width: thin;
  scrollbar-color: var(--violet) transparent;
}
.pk-panel::-webkit-scrollbar { width: 4px; }
.pk-panel::-webkit-scrollbar-thumb { background: var(--violet); border-radius: 2px; }

.pk-header { display: flex; justify-content: space-between; align-items: flex-start; }
.pk-label {
  font-size: 0.75rem; letter-spacing: 0.4em;
  text-transform: uppercase; color: var(--cyan);
  font-weight: 600; margin-bottom: 0.4rem;
}
.pk-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 400; text-transform: uppercase;
  font-family: "Sign Painter", cursive; line-height: 1.1;
}
.pk-close {
  background: none; border: 1px solid rgba(155,48,255,0.3);
  color: var(--text-dim); width: 40px; height: 40px;
  font-size: 1rem; cursor: pointer; transition: all 0.3s; flex-shrink: 0;
}
.pk-close:hover { border-color: var(--cyan); color: var(--cyan); }

.pk-intro {
  font-size: 0.9rem; color: var(--text-dim); line-height: 1.7;
  border-left: 2px solid var(--violet); padding-left: 1rem;
}
.pk-intro a { color: var(--cyan); text-decoration: none; }

.pk-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.pk-filter {
  padding: 0.35rem 1rem;
  border: 1px solid var(--border); background: transparent;
  color: var(--text-dim); font-family: 'Rajdhani', sans-serif;
  font-size: 0.75rem; letter-spacing: 0.15em;
  text-transform: uppercase; font-weight: 600;
  cursor: pointer; transition: all 0.25s;
}
.pk-filter:hover { border-color: var(--violet); color: var(--text); }
.pk-filter.active { background: var(--violet); border-color: var(--violet); color: #fff; }

.pk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.pk-item {
  border: 1px solid var(--border); background: var(--surface);
  display: flex; flex-direction: column; transition: border-color 0.3s;
}
.pk-item:hover { border-color: rgba(155,48,255,0.5); }

.pk-preview {
  aspect-ratio: 1; display: flex;
  align-items: center; justify-content: center;
  position: relative; overflow: hidden; background: #0a0220;
}
.pk-img { max-width: 70%; max-height: 70%; object-fit: contain; }
.pk-placeholder {
  font-size: 1.5rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(155,48,255,0.4); font-family: 'Rajdhani', sans-serif;
}
.pk-format {
  position: absolute; top: 0.5rem; right: 0.5rem;
  font-size: 0.55rem; letter-spacing: 0.15em;
  padding: 0.2rem 0.5rem;
  background: rgba(155,48,255,0.2);
  border: 1px solid rgba(155,48,255,0.3);
  color: var(--violet); text-transform: uppercase; font-weight: 700;
}

.pk-info { padding: 0.75rem; flex: 1; }
.pk-name {
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em;
  color: var(--text); margin-bottom: 0.3rem; line-height: 1.3;
}
.pk-desc { font-size: 0.7rem; color: var(--text-dim); line-height: 1.5; }

.pk-download {
  display: block; width: 100%; padding: 0.6rem;
  text-align: center; background: transparent; border: none;
  border-top: 1px solid var(--border);
  color: var(--cyan); font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em;
  text-transform: uppercase; text-decoration: none;
  cursor: pointer; transition: all 0.25s;
}
.pk-download:hover { background: rgba(0,229,255,0.08); }
.pk-download.disabled { color: var(--text-dim); cursor: default; }
.pk-download.disabled:hover { background: transparent; color: var(--violet); }

.pk-footer {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem; padding-top: 1rem;
  border-top: 1px solid var(--border);
  font-size: 0.85rem; color: var(--text-dim);
}
.pk-contact-btn {
  padding: 0.6rem 1.5rem; background: var(--grad); color: #fff;
  text-decoration: none; font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.2em; text-transform: uppercase;
  clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
  transition: opacity 0.3s;
}
.pk-contact-btn:hover { opacity: 0.85; }

@media (max-width: 600px) {
  .pk-panel { padding: 1.5rem 1rem; }
  .pk-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
