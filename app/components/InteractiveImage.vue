<template>
  <div class="w-full">
    <div class="mx-auto" style="max-width: 800px;">
      <div 
        v-if="enableZoom"
        class="bg-white border border-gray-200 p-2 flex items-center justify-between rounded-t-lg shadow-sm"
      >
        <div class="flex gap-1">
          <button
            @click="zoomIn"
            :disabled="currentZoom >= maxZoom"
            class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed transition"
            title="Zoom In"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button
            @click="zoomOut"
            :disabled="currentZoom <= minZoom"
            class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed transition"
            title="Zoom Out"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <button
            @click="resetZoom"
            class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition"
            title="Reset"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        <div class="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {{ Math.round(currentZoom * 100) }}%
        </div>
      </div>

      <div 
        class="relative bg-gradient-to-br from-gray-50 to-gray-100 custom-scrollbar"
        :class="{ 
          'overflow-auto': enableZoom && currentZoom > 1,
          'rounded-b-lg': enableZoom,
          'rounded-lg': !enableZoom
        }"
        :style="(enableZoom && currentZoom > 1) ? { maxHeight: isMobile ? '60vh' : '80vh' } : {}"
      >
        <div 
          v-if="!allImagesLoaded"
          class="w-full bg-gray-100 flex items-center justify-center"
          :style="{ height: '600px' }"
        >
          <div class="text-gray-400 text-sm">Loading...</div>
        </div>

        <div v-show="allImagesLoaded" class="relative inline-block min-w-full">
          <div
            class="relative origin-top-left transition-transform duration-300"
            :style="{
              transform: enableZoom ? `scale(${currentZoom})` : 'scale(1)',
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
                :to="localePath(marker.link || `/markers/${marker.slug}`)"
                class="absolute group cursor-pointer hover:z-10"
                :style="{
                  left: marker.x + '%',
                  top: marker.y + '%',
                  transform: 'translate(-50%, -50%)'
                }"
              >
                <img
                  :src="marker.image"
                  :alt="marker.slug"
                  class="block drop-shadow-lg select-none transform hover:scale-110 transition-transform duration-300 cursor-pointer"
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
  },
  enableZoom: {
    type: Boolean,
    default: true
  }
})

const localePath = useLocalePath()

const allImagesLoaded = ref(false)
const bgImage = ref(null)
const imageWidth = ref(0)
const isMobile = ref(false)

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

const getMarkerSize = (marker) => {
  const baseSize = marker.size || 60
  const scaleFactor = imageWidth.value / 600
  return baseSize * scaleFactor
}

const zoomIn = () => {
  if (props.enableZoom && currentZoom.value < maxZoom) {
    currentZoom.value = Math.min(currentZoom.value + zoomStep, maxZoom)
  }
}

const zoomOut = () => {
  if (props.enableZoom && currentZoom.value > minZoom) {
    currentZoom.value = Math.max(currentZoom.value - zoomStep, minZoom)
  }
}

const resetZoom = () => {
  if (props.enableZoom) {
    currentZoom.value = minZoom
  }
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

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}
</style>