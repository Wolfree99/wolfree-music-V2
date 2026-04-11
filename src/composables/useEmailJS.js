import { ref } from 'vue'

const EMAILJS_PUBLIC_KEY  = 'Dl34Ktz1ncsAlcjqa'
const EMAILJS_SERVICE_ID  = 'service_16bmz08'
const EMAILJS_TEMPLATE_ID = 'template_d4m6bzh'

export function useEmailJS() {
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const isError   = ref(false)

  function init() {
    if (window.emailjs) {
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
    }
  }

  async function sendForm(formEl) {
    if (!window.emailjs) return

    isLoading.value = true
    isSuccess.value = false
    isError.value   = false

    try {
      await window.emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formEl)
      isSuccess.value = true
      isLoading.value = false
    } catch (err) {
      console.error('EmailJS error:', err)
      isError.value   = true
      isLoading.value = false
    }
  }

  return { isLoading, isSuccess, isError, init, sendForm }
}
