<template>
  <div class="w-full">
    <div class="mx-auto" style="max-width: 1000px;">
      <div class="relative w-full">
        <div 
          v-if="!allImagesLoaded"
          class="w-full bg-gray-200 rounded-lg flex items-center justify-center"
          :style="{ height: '600px' }"
        >
          <div class="text-gray-500 text-lg">Loading...</div>
        </div>

        <div v-show="allImagesLoaded">
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
              class="absolute group cursor-pointer hover:z-10 transition-transform duration-200 hover:scale-150"
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

onMounted(() => {
  preloadImages()
  
  if (process.client) {
    window.addEventListener('resize', updateImageWidth)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateImageWidth)
  }
})
</script>