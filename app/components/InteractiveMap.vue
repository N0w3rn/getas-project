<template>
  <div class="w-full">
    <div class="mx-auto" style="max-width: 800px;">
      <!-- Zoom Controls -->
      <div class="bg-slate-100 p-3 flex items-center justify-between border-b border-slate-200 rounded-t-lg">
        <div class="flex gap-2">
          <button
            @click="zoomIn"
            :disabled="currentZoom >= maxZoom"
            class="px-3 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>
          <button
            @click="zoomOut"
            :disabled="currentZoom <= minZoom"
            class="px-3 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </button>
          <button
            @click="resetZoom"
            class="px-3 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        <div class="text-sm text-slate-600">
          Zoom: {{ Math.round(currentZoom * 100) }}%
        </div>
      </div>

      <!-- Map Container - Scrollbar nur bei Zoom -->
      <div 
        class="relative bg-slate-50 rounded-b-lg"
        :class="{ 'overflow-auto': currentZoom > 1 }"
        :style="currentZoom > 1 ? { maxHeight: isMobile ? '60vh' : '80vh' } : {}"
      >
        <!-- Loading State -->
        <div 
          v-if="!allImagesLoaded"
          class="w-full bg-gray-200 flex items-center justify-center"
          :style="{ height: '600px' }"
        >
          <div class="text-gray-500 text-lg">Loading...</div>
        </div>

        <!-- Alles auf einmal anzeigen wenn fertig geladen -->
        <div v-show="allImagesLoaded" class="relative inline-block min-w-full">
          <div
            class="relative origin-top-left transition-transform duration-300"
            :style="{
              transform: `scale(${currentZoom})`,
              transformOrigin: 'top left'
            }"
          >
            <img
              ref="bgImage"
              :src="backgroundImage"
              alt="Background"
              class="w-full h-auto block"
            />
            <div class="absolute inset-0">
              <NuxtLink
                v-for="marker in markers"
                :key="marker.id"
                :to="localePath('/map/' + marker.slug)"
                class="absolute group cursor-pointer hover:z-10 transition-transform duration-200 hover:scale-110"
                :style="{
                  left: marker.x + '%',
                  top: marker.y + '%',
                  transform: 'translate(-50%, -50%)'
                }"
              >
                <img
                  :src="marker.image"
                  :alt="marker.slug"
                  class="block drop-shadow-lg select-none"
                  :style="{
                    width: getMarkerSize(marker) + 'px',
                    height: 'auto'
                  }"
                  draggable="false"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
    required: true
  },
  markers: {
    type: Array,
    default: () => []
  }
})

const localePath = useLocalePath()

const allImagesLoaded = ref(false)
const bgImage = ref(null)
const imageWidth = ref(0)
const isMobile = ref(false)

// Zoom State
const currentZoom = ref(1)
const minZoom = 1
const maxZoom = 3
const zoomStep = 0.25

const checkMobile = () => {
  if (process.client) {
    isMobile.value = window.innerWidth < 768
  }
}

const preloadImages = () => {
  const imagesToLoad = [
    props.backgroundImage,
    ...props.markers.map(m => m.image)
  ]

  let loadedCount = 0
  const totalImages = imagesToLoad.length

  imagesToLoad.forEach(src => {
    const img = new Image()
    img.onload = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        allImagesLoaded.value = true
        nextTick(() => {
          updateImageWidth()
        })
      }
    }
    img.onerror = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        allImagesLoaded.value = true
        nextTick(() => {
          updateImageWidth()
        })
      }
    }
    img.src = src
  })
}

const updateImageWidth = () => {
  if (bgImage.value) {
    imageWidth.value = bgImage.value.offsetWidth
  }
}

// Marker-Größe: Skaliert proportional mit dem Bild
const getMarkerSize = (marker) => {
  const baseSize = marker.size || 60
  const scaleFactor = imageWidth.value / 600
  return baseSize * scaleFactor
}

// Zoom Functions
const zoomIn = () => {
  if (currentZoom.value < maxZoom) {
    currentZoom.value = Math.min(currentZoom.value + zoomStep, maxZoom)
  }
}

const zoomOut = () => {
  if (currentZoom.value > minZoom) {
    currentZoom.value = Math.max(currentZoom.value - zoomStep, minZoom)
  }
}

const resetZoom = () => {
  currentZoom.value = minZoom
}

onMounted(() => {
  preloadImages()
  checkMobile()
  
  if (process.client) {
    window.addEventListener('resize', () => {
      updateImageWidth()
      checkMobile()
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateImageWidth)
  }
})
</script>