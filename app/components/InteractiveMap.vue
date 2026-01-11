<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <!-- Controls -->
    <div class="bg-slate-100 p-3 flex items-center justify-between border-b border-slate-200">
      <div class="flex gap-2">
        <button
          @click="zoomIn"
          :disabled="currentZoom >= maxZoom"
          class="px-3 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          :title="$t('map.zoom_in')"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </button>
        <button
          @click="zoomOut"
          :disabled="currentZoom <= minZoom"
          class="px-3 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          :title="$t('map.zoom_out')"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </button>
        <button
          @click="resetView"
          class="px-3 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition"
          :title="$t('map.reset')"
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

    <!-- Map Container -->
    <div
      ref="mapContainer"
      class="relative overflow-auto cursor-grab active:cursor-grabbing bg-slate-50"
      style="height: 1200px;"
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startDrag"
      @touchmove="drag"
      @touchend="stopDrag"
    >
      <!-- Spacer for scroll area -->
      <div
        class="relative"
        :style="{
          width: scaledWidth + 'px',
          height: scaledHeight + 'px',
          minWidth: '100%',
          minHeight: '100%'
        }"
      >
        <!-- Map Image and Markers Container -->
        <div
          ref="mapContent"
          class="absolute"
          :style="{
            width: displayWidth + 'px',
            height: displayHeight + 'px',
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) scale(${currentZoom})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }"
        >
          <!-- Background Image -->
          <img
            v-if="backgroundImage"
            ref="mapImage"
            :src="backgroundImage"
            class="w-full h-full select-none pointer-events-none"
            style="display: block; object-fit: contain;"
            draggable="false"
            @load="onImageLoad"
          />

          <!-- Fallback -->
          <div
            v-else
            class="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center"
          >
            <span class="text-slate-500">Not Found</span>
          </div>

          <!-- Markers - MIT MARKER-SPEZIFISCHER KOMPENSATION -->
          <div
            v-for="marker in visibleMarkers"
            :key="marker.id"
            class="absolute"
            :style="{
              left: marker.x + '%',
              top: marker.y + '%'
            }"
          >
            <NuxtLink
              :to="localePath(`/map/${marker.slug}`)"
              class="block group cursor-pointer hover:z-50 pointer-events-auto"
              :style="{
                transform: `translate(-50%, -50%) scale(${getMarkerScale(marker)})`,
                transformOrigin: 'center center'
              }"
              @click.stop
            >
              <div class="relative">
                <img
                  :src="marker.image"
                  :alt="marker.slug"
                  class="transition-transform duration-200 group-hover:scale-125 drop-shadow-lg select-none"
                  :style="{
                    width: getMarkerSize(marker) + 'px',
                    height: 'auto'
                  }"
                  draggable="false"
                />

                <!-- Tooltip -->
                <div
                  v-if="marker.label"
                  class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg"
                >
                  {{ $t(`map.${marker.slug}`) }}
                </div>
              </div>
            </NuxtLink>
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
    default: '/images/map-background.jpg'
  },
  markers: {
    type: Array,
    default: () => []
  },
  containerHeight: {
    type: Number,
    default: 600
  }
})

const { t } = useI18n()
const localePath = useLocalePath()

// Refs
const mapContainer = ref(null)
const mapContent = ref(null)
const mapImage = ref(null)

// Display dimensions (base size)
const displayWidth = ref(0)
const displayHeight = ref(0)

// Scaled dimensions (actual size after zoom)
const scaledWidth = computed(() => displayWidth.value * currentZoom.value)
const scaledHeight = computed(() => displayHeight.value * currentZoom.value)

// Zoom state
const currentZoom = ref(1)
const minZoom = 1
const maxZoom = 3
const zoomStep = 0.25

// Marker scale compensation factor (0 = keine Kompensation, 1 = volle Kompensation)
const markerScaleFactor = 0.4 // Default fallback

// Drag state
const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const scrollLeft = ref(0)
const scrollTop = ref(0)

// Responsive
const isMobile = ref(false)

// Visible markers
const visibleMarkers = computed(() => {
  return props.markers.filter(marker => marker.image)
})

// Calculate marker scale with smooth compensation (per marker!)
const getMarkerScale = (marker) => {
  // Use marker-specific compensation or fallback to default
  const factor = marker?.scaleCompensation !== undefined ? marker.scaleCompensation : markerScaleFactor
  
  // Formula: scale = (1 / currentZoom)^factor
  // factor = 0: keine Kompensation (Marker zoomen normal mit)
  // factor = 1: volle Kompensation (Marker bleiben exakt gleich groß)
  // factor = 0.4-0.6: moderate Kompensation
  return Math.pow(1 / currentZoom.value, factor)
}

// Calculate dimensions - CONTAIN (show full image)
const calculateDimensions = () => {
  if (!mapImage.value || !mapContainer.value) return

  const containerWidth = mapContainer.value.clientWidth
  const containerHeight = 1200

  const imageNaturalWidth = mapImage.value.naturalWidth
  const imageNaturalHeight = mapImage.value.naturalHeight
  const imageAspectRatio = imageNaturalWidth / imageNaturalHeight
  const containerAspectRatio = containerWidth / containerHeight

  // CONTAIN: Show entire image, no cropping
  if (imageAspectRatio > containerAspectRatio) {
    // Image wider - fit by width
    displayWidth.value = containerWidth
    displayHeight.value = containerWidth / imageAspectRatio
  } else {
    // Image taller - fit by height
    displayHeight.value = containerHeight
    displayWidth.value = containerHeight * imageAspectRatio
  }

  // Reset zoom
  currentZoom.value = minZoom
}

// Image load handler
const onImageLoad = () => {
  calculateDimensions()
  centerView()
}

// Center view
const centerView = () => {
  nextTick(() => {
    if (mapContainer.value) {
      const container = mapContainer.value
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2
      container.scrollTop = (container.scrollHeight - container.clientHeight) / 2
    }
  })
}

// Zoom functions
const zoomIn = () => {
  if (currentZoom.value < maxZoom) {
    const oldZoom = currentZoom.value
    currentZoom.value = Math.min(currentZoom.value + zoomStep, maxZoom)
    adjustScrollForZoom(oldZoom, currentZoom.value)
  }
}

const zoomOut = () => {
  if (currentZoom.value > minZoom) {
    const oldZoom = currentZoom.value
    currentZoom.value = Math.max(currentZoom.value - zoomStep, minZoom)
    adjustScrollForZoom(oldZoom, currentZoom.value)
  }
}

const adjustScrollForZoom = (oldZoom, newZoom) => {
  nextTick(() => {
    if (!mapContainer.value) return

    const container = mapContainer.value
    const zoomRatio = newZoom / oldZoom

    // Keep zoom centered on viewport center
    const centerX = container.scrollLeft + container.clientWidth / 2
    const centerY = container.scrollTop + container.clientHeight / 2

    container.scrollLeft = centerX * zoomRatio - container.clientWidth / 2
    container.scrollTop = centerY * zoomRatio - container.clientHeight / 2
  })
}

const resetView = () => {
  currentZoom.value = minZoom
  centerView()
}

// Drag functions
const startDrag = (e) => {
  if (e.target.tagName === 'A' || (e.target.tagName === 'IMG' && e.target.parentElement.tagName === 'A')) {
    return // Don't drag when clicking markers
  }

  isDragging.value = true
  const container = mapContainer.value

  if (e.type === 'mousedown') {
    startX.value = e.pageX
    startY.value = e.pageY
  } else if (e.type === 'touchstart') {
    startX.value = e.touches[0].pageX
    startY.value = e.touches[0].pageY
  }

  scrollLeft.value = container.scrollLeft
  scrollTop.value = container.scrollTop

  e.preventDefault()
}

const drag = (e) => {
  if (!isDragging.value) return
  e.preventDefault()

  const container = mapContainer.value
  let x, y

  if (e.type === 'mousemove') {
    x = e.pageX
    y = e.pageY
  } else if (e.type === 'touchmove') {
    x = e.touches[0].pageX
    y = e.touches[0].pageY
  }

  const walkX = startX.value - x
  const walkY = startY.value - y

  container.scrollLeft = scrollLeft.value + walkX
  container.scrollTop = scrollTop.value + walkY
}

const stopDrag = () => {
  isDragging.value = false
}

// Responsive marker sizing
const updateScreenSize = () => {
  if (process.client) {
    isMobile.value = window.innerWidth < 768
  }
  calculateDimensions()
}

const getMarkerSize = (marker) => {
  const baseSize = marker.size || 50
  const sizeAdjustment = isMobile.value ? 0.4 : 1
  return baseSize * sizeAdjustment
}

// Resize handler
let resizeTimeout = null
const handleResize = () => {
  if (resizeTimeout) clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    updateScreenSize()
    centerView()
  }, 250)
}

onMounted(() => {
  updateScreenSize()
  if (process.client) {
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (resizeTimeout) clearTimeout(resizeTimeout)
  if (process.client) {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.cursor-grab {
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
}

.cursor-grab:active {
  cursor: grabbing;
}
</style>