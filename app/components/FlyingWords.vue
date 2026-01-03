<template>
  <div 
    ref="containerRef"
    class="relative w-full bg-white rounded-lg shadow-lg overflow-hidden"
    :class="isMobile ? 'h-64' : 'h-96'"
  >
    <NuxtLink
      v-for="word in activeWords"
      :key="word.id"
      :to="$localePath(`/words/${word.slug}`)"
      class="absolute cursor-pointer hover:scale-110 transition-all duration-300 whitespace-nowrap font-bold"
      :style="{
        left: word.currentX + '%',
        top: word.currentY + '%',
        fontSize: word.size + 'px',
        color: word.color,
        opacity: word.opacity,
        transition: `all ${word.duration}s linear`,
        transform: `translate(-50%, -50%)`
      }"
    >
      {{ $t(`words.${word.slug}`) }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { t } = useI18n()
const allWords = ref([])
const activeWords = ref([])
const containerRef = ref(null)
const isMobile = ref(false)
const windowWidth = ref(0)

let wordIndex = 0
let scheduleTimeout = null

// Alle Wort-Seiten automatisch sammeln
const wordPages = import.meta.glob('@/pages/words/*.vue')

// Bildschirmgröße überwachen
const updateScreenSize = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth
    isMobile.value = window.innerWidth < 768
  }
}

// Wörter aus Dateinamen extrahieren
const extractWords = () => {
  const wordList = []
  
  for (const path in wordPages) {
    const fileName = path.split('/').pop().replace('.vue', '')
    
    wordList.push({
      slug: fileName
    })
  }
  
  return wordList
}

// Zufällige Start- und Zielposition generieren
const getRandomPositions = () => {
  const side = Math.floor(Math.random() * 4)
  
  let startX, startY, endX, endY
  
  // Mehr Abstand für besseres Verschwinden
  const margin = isMobile.value ? 30 : 25
  
  switch(side) {
    case 0: // Start oben
      startX = Math.random() * 100
      startY = -margin
      endX = Math.random() * 100
      endY = 100 + margin
      break
    case 1: // Start rechts
      startX = 100 + margin
      startY = Math.random() * 100
      endX = -margin
      endY = Math.random() * 100
      break
    case 2: // Start unten
      startX = Math.random() * 100
      startY = 100 + margin
      endX = Math.random() * 100
      endY = -margin
      break
    case 3: // Start links
      startX = -margin
      startY = Math.random() * 100
      endX = 100 + margin
      endY = Math.random() * 100
      break
  }
  
  return { startX, startY, endX, endY }
}

// Neues Wort generieren
const createWord = (word) => {
  const colors = [
    '#1e40af', '#7c3aed', '#059669', '#dc2626', 
    '#ea580c', '#0891b2', '#4f46e5', '#be123c',
    '#0d9488', '#c026d3', '#65a30d', '#e11d48'
  ]
  
  const positions = getRandomPositions()
  
  // Responsive Schriftgrößen
  let minSize, maxSize
  if (isMobile.value) {
    minSize = 18
    maxSize = 32
  } else {
    minSize = 28
    maxSize = 53
  }
  
  // Responsive Geschwindigkeiten
  const baseDuration = isMobile.value ? 4 : 6
  const durationVariation = isMobile.value ? 2 : 4
  
  return {
    id: `${word.slug}-${Date.now()}-${Math.random()}`,
    slug: word.slug,
    currentX: positions.startX,
    currentY: positions.startY,
    targetX: positions.endX,
    targetY: positions.endY,
    size: Math.random() * (maxSize - minSize) + minSize,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * durationVariation + baseDuration,
    opacity: 0
  }
}

// Nächstes Wort hinzufügen und animieren
const addNextWord = () => {
  if (allWords.value.length === 0) return
  
  const word = allWords.value[wordIndex % allWords.value.length]
  const newWord = createWord(word)
  
  activeWords.value.push(newWord)
  wordIndex++
  
  // Start Animation nach kurzer Verzögerung
  setTimeout(() => {
    const wordInArray = activeWords.value.find(w => w.id === newWord.id)
    if (wordInArray) {
      wordInArray.currentX = wordInArray.targetX
      wordInArray.currentY = wordInArray.targetY
      wordInArray.opacity = 1
    }
  }, 50)
  
  // Fade out kurz vor Ende
  setTimeout(() => {
    const wordInArray = activeWords.value.find(w => w.id === newWord.id)
    if (wordInArray) {
      wordInArray.opacity = 0
    }
  }, newWord.duration * 1000 - 500)
  
  // Wort nach Animation entfernen
  setTimeout(() => {
    activeWords.value = activeWords.value.filter(w => w.id !== newWord.id)
  }, newWord.duration * 1000 + 500)
}

// Zeitplan für nächstes Wort
const scheduleNextWord = () => {
  // Weniger Wörter gleichzeitig auf Mobile
  const baseDelay = isMobile.value ? 2000 : 1500
  const delayVariation = 1000
  
  const delay = Math.random() * delayVariation + baseDelay
  
  scheduleTimeout = setTimeout(() => {
    addNextWord()
    scheduleNextWord()
  }, delay)
}

// Alle aktiven Wörter neu generieren bei Resize
const regenerateWords = () => {
  // Stoppe aktuellen Schedule
  if (scheduleTimeout) {
    clearTimeout(scheduleTimeout)
  }
  
  // Lösche aktive Wörter
  activeWords.value = []
  wordIndex = 0
  
  // Neu starten
  addNextWord()
  scheduleNextWord()
}

// Initialisierung
const initialize = () => {
  allWords.value = extractWords()
  updateScreenSize()
  
  addNextWord()
  scheduleNextWord()
}

// Event Listener für Resize
let resizeTimeout = null
const handleResize = () => {
  // Debounce für bessere Performance
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
  
  resizeTimeout = setTimeout(() => {
    const wasMobile = isMobile.value
    updateScreenSize()
    
    // Nur regenerieren wenn sich Mobile/Desktop Status ändert
    if (wasMobile !== isMobile.value) {
      regenerateWords()
    }
  }, 250)
}

onMounted(() => {
  initialize()
  
  if (process.client) {
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
  }
})

onUnmounted(() => {
  if (scheduleTimeout) {
    clearTimeout(scheduleTimeout)
  }
  
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
  
  if (process.client) {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('orientationchange', handleResize)
  }
  
  activeWords.value = []
})
</script>

<style scoped>
/* Keine zusätzlichen Keyframes nötig - wird über Vue Transitions gemacht */
</style>