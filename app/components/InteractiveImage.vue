<template>
  <div 
    class="w-full"
    :class="fillViewport ? 'min-h-screen flex items-center justify-center' : ''"
    :style="fillViewport ? { backgroundColor: backgroundColor } : {}"
  >
    <div class="mx-auto" :style="fullscreen ? {} : { maxWidth: maxWidth }">
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
        class="relative custom-scrollbar"
        :class="{ 
          'overflow-auto': enableZoom && currentZoom > 1,
          'rounded-b-lg': enableZoom,
          'rounded-lg': !enableZoom
        }"
        :style="(enableZoom && currentZoom > 1) ? { maxHeight: isMobile ? '60vh' : '80vh' } : {}"
      >
        <div 
          v-if="!allImagesLoaded"
          class="w-full flex items-center justify-center"
          :style="{ height: fullscreen ? '100vh' : '600px' }"
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
              <template v-for="marker in markers" :key="marker.id">
                <NuxtLink
                  v-if="marker.type !== 'html' && marker.link"
                  :to="localePath(marker.link)"
                  class="absolute group cursor-pointer hover:z-10"
                  :style="{
                    left: marker.x + '%',
                    top: marker.y + '%',
                    transform: 'translate(-50%, -50%)'
                  }"
                >
                  <img
                    :src="marker.image"
                    :alt="marker.slug || marker.id"
                    class="block drop-shadow-lg select-none transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    :style="{
                      width: getMarkerSize(marker) + 'px',
                      height: 'auto'
                    }"
                    style="max-width: none !important; max-height: none !important;"
                    draggable="false"
                  />
                </NuxtLink>

                <div
                  v-else-if="marker.type !== 'html' && !marker.link"
                  class="absolute group"
                  :style="{
                    left: marker.x + '%',
                    top: marker.y + '%',
                    transform: 'translate(-50%, -50%)'
                  }"
                >
                  <img
                    :src="marker.image"
                    :alt="marker.slug || marker.id"
                    class="block drop-shadow-lg select-none"
                    :style="{
                      width: getMarkerSize(marker) + 'px',
                      height: 'auto'
                    }"
                    style="max-width: none !important; max-height: none !important;"
                    draggable="false"
                  />
                </div>

                <div
                  v-else-if="marker.type === 'html'"
                  class="absolute"
                  :style="{
                    left: marker.x + '%',
                    top: marker.y + '%',
                    transform: 'translate(-50%, -50%)',
                    width: marker.width ? marker.width + 'px' : 'auto',
                    maxWidth: marker.maxWidth ? marker.maxWidth + 'px' : 'none'
                  }"
                >
                  <component 
                    v-if="marker.component" 
                    :is="marker.component"
                    v-bind="marker.props || {}"
                  />
                  <div 
                    v-else-if="marker.html"
                    v-html="marker.html"
                    class="drop-shadow-lg"
                  />
                  <div
                    v-else-if="marker.content"
                    class="drop-shadow-lg"
                  >
                    {{ marker.content }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Marker {
  id: string
  type?: 'image' | 'html'
  link?: string
  image?: string
  html?: string
  content?: string
  component?: Component
  props?: Record<string, any>
  x: number
  y: number
  size?: number
  width?: number
  maxWidth?: number
  slug?: string
  label?: boolean
}

const props = withDefaults(defineProps<{
  backgroundImage: string
  markers?: Marker[]
  enableZoom?: boolean
  fullscreen?: boolean
  maxWidth?: string
  fillViewport?: boolean
  backgroundColor?: string
}>(), {
  markers: () => [],
  enableZoom: false,
  fullscreen: false,
  maxWidth: '100%',
  fillViewport: false,
  backgroundColor: '#f5f5f0'
})

const localePath = useLocalePath()

const allImagesLoaded = ref(false)
const bgImage = ref<HTMLImageElement | null>(null)
const imageWidth = ref(0)
const isMobile = ref(false)

const currentZoom = ref(1)
const minZoom = 1
const maxZoom = 3
const zoomStep = 0.25

const checkMobile = () => {
  if (import.meta.client) {
    isMobile.value = window.innerWidth < 768
  }
}

const preloadImages = () => {
  const imagesToLoad = [
    props.backgroundImage,
    ...props.markers
      .filter(m => m.type !== 'html' && m.image)
      .map(m => m.image!)
  ]

  let loadedCount = 0
  const totalImages = imagesToLoad.length

  if (totalImages === 0) {
    allImagesLoaded.value = true
    return
  }

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

const getMarkerSize = (marker: Marker) => {
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
  
  if (import.meta.client) {
    window.addEventListener('resize', () => {
      updateImageWidth()
      checkMobile()
    })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
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