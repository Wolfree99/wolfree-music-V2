<template>
  <ParallaxCanvas />
  <div class="glow-cursor" id="glow-cursor"></div>
  <AppNav />

  <div id="smooth-wrapper">
    <HeroSection />
    <div class="divider"></div>
    <ManifesteSection />
    <div class="divider"></div>
    <BiographieSection />
    <div class="divider"></div>
    <DjSetsSection />
    <div class="divider"></div>
    <DatesSection />
    <div class="divider"></div>
    <GalerieSection />
    <div class="divider"></div>
    <StylesMusicauxSection />
    <div class="divider"></div>
    <B2BSection />
    <div class="divider"></div>
    <MeuteSection />
    <div class="divider"></div>
    <BookingSection />
    <div class="divider"></div>
    <PressKitSection />
    <AppFooter />
  </div>

  <AppLightbox />
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { useParallax } from '@/composables/useParallax'

import ParallaxCanvas        from '@/components/ParallaxCanvas.vue'
import AppNav                from '@/components/AppNav.vue'
import HeroSection           from '@/components/HeroSection.vue'
import ManifesteSection      from '@/components/ManifesteSection.vue'
import BiographieSection     from '@/components/BiographieSection.vue'
import DjSetsSection         from '@/components/DjSetsSection.vue'
import DatesSection          from '@/components/DatesSection.vue'
import GalerieSection        from '@/components/GalerieSection.vue'
import StylesMusicauxSection from '@/components/StylesMusicauxSection.vue'
import B2BSection            from '@/components/B2BSection.vue'
import MeuteSection          from '@/components/MeuteSection.vue'
import BookingSection        from '@/components/BookingSection.vue'
import PressKitSection       from '@/components/PressKitSection.vue'
import AppFooter             from '@/components/AppFooter.vue'
import AppLightbox           from '@/components/AppLightbox.vue'

const { startParallax } = useParallax()

onMounted(async () => {
  // Cursor glow
  const glow = document.getElementById('glow-cursor')
  document.addEventListener('mousemove', (e) => {
    if (glow) {
      glow.style.left = e.clientX + 'px'
      glow.style.top  = e.clientY + 'px'
    }
  })

  // Attend que tous les composants enfants soient dans le DOM
  await nextTick()
  startParallax()
})
</script>
