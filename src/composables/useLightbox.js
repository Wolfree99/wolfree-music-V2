import { ref } from 'vue'

const isOpen = ref(false)
const currentIndex = ref(0)
const images = ref([])

export function useLightbox() {
  function open(imgs, index) {
    images.value = imgs
    currentIndex.value = index
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  function close() {
    isOpen.value = false
    document.body.style.overflow = ''
  }

  function prev() {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
  }

  function next() {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }

  return { isOpen, currentIndex, images, open, close, prev, next }
}
