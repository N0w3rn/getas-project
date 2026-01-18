<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-6xl mx-auto space-y-8">
      
      <div class="bg-white rounded-lg shadow-xl p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          {{ $t('welcome') }}
        </h1>
        <p class="text-gray-600 text-lg">
          {{ $t('description') }}
        </p>
      </div>
      
      <div class="relative w-full bg-white rounded-lg shadow-lg overflow-hidden p-6 space-y-4">
        <p class="text-gray-700 leading-relaxed">
          {{ $t('indexPageTextBlock1.intro') }}
        </p>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('indexPageTextBlock1.method') }}
        </p>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('indexPageTextBlock1.implementation') }}
        </p>
      </div>
      
      <InteractiveImage 
        :background-image="sceneBackground"
        :markers="sceneMarkers"
      />
    </div>
  </div>
</template>

<script setup>
const sceneBackground = '/images/map.jpg'

const sceneMarkers = [
  {
    id: 'main-scene-marker',
    slug: 'main-scene',
    image: '/images/markers/marker-plan1.gif',
    x: 36,
    y: 25,
    size: 40,
    label: true
  }
]
</script>