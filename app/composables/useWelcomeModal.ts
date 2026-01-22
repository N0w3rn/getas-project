import { ref } from 'vue'

interface WelcomeModalData {
  closed: boolean
  timestamp: number
}

export const useWelcomeModal = (expiryMinutes: number = 15) => {
  const STORAGE_KEY = 'welcomeModal'
  const showModal = ref(false)

  const checkAndShowModal = () => {
    if (!import.meta.client) return

    const storedData = sessionStorage.getItem(STORAGE_KEY)

    if (!storedData) {
      showModal.value = true
      return
    }

    try {
      const parsed: WelcomeModalData = JSON.parse(storedData)
      const now = Date.now()
      const expiryTime = expiryMinutes * 60 * 1000

      if (now - parsed.timestamp > expiryTime) {
        showModal.value = true
      } else {
        showModal.value = false
      }
    } catch (error) {
      showModal.value = true
    }
  }

  const closeModal = () => {
    if (!import.meta.client) return

    showModal.value = false
    
    const data: WelcomeModalData = {
      closed: true,
      timestamp: Date.now()
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  const openModal = () => {
    showModal.value = true
  }

  return {
    showModal,
    checkAndShowModal,
    closeModal,
    openModal
  }
}