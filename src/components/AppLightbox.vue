<template>
  <Teleport to="body">
    <div
      class="lightbox"
      :class="{ open: isOpen }"
      @click.self="close"
    >
      <button class="lightbox-close" @click="close">✕</button>
      <button class="lightbox-nav lightbox-prev" @click="prev">‹</button>
      <img
        v-if="images[currentIndex]"
        class="lightbox-img"
        :src="images[currentIndex]"
        alt=""
      >
      <button class="lightbox-nav lightbox-next" @click="next">›</button>
      <p class="lightbox-counter">{{ currentIndex + 1 }} / {{ images.length }}</p>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useLightbox } from '@/composables/useLightbox'

const { isOpen, currentIndex, images, close, prev, next } = useLightbox()

function onKeydown(e) {
  if (!isOpen.value) return
  if (e.key === 'Escape')     close()
  if (e.key === 'ArrowLeft')  prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(()  => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.lightbox {
  position: fixed; inset: 0;
  background: rgba(3,1,10,0.96);
  z-index: 10000;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(10px);
}
.lightbox.open { opacity: 1; pointer-events: all; }
.lightbox-img {
  max-width: 88vw; max-height: 88vh;
  object-fit: contain;
  border: 1px solid transparent;
  background: linear-gradient(var(--bg), var(--bg)) padding-box, var(--grad) border-box;
  clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
  box-shadow: 0 0 80px rgba(155,48,255,0.25);
}
.lightbox-close {
  position: absolute; top: 2rem; right: 2.5rem;
  background: none; border: none;
  color: rgba(232,224,255,0.5); font-size: 1.8rem;
  cursor: pointer; line-height: 1; transition: color 0.3s;
  font-family: 'Rajdhani', sans-serif;
}
.lightbox-close:hover { color: var(--cyan); }
.lightbox-nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: none; border: 1px solid rgba(155,48,255,0.3);
  color: var(--text-dim); font-size: 1.4rem;
  width: 50px; height: 50px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.3s;
  font-family: 'Rajdhani', sans-serif;
}
.lightbox-nav:hover { border-color: var(--cyan); color: var(--cyan); }
.lightbox-prev { left: 2rem; }
.lightbox-next { right: 2rem; }
.lightbox-counter {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  font-size: 0.65rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--text-dim);
}
</style>
