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
      
      <div class="relative w-full bg-white rounded-lg shadow-lg overflow-hidden p-6 font-semibold">
        {{ $t('indexPageTextBlock1') }}
      </div>
      
      <InteractiveImage 
        :background-image="sceneBackground"
        :markers="sceneMarkers"
      />
    </div>
  </div>
</template>

<script setup>
const sceneBackground = '/images/scene-background.jpg'

const sceneMarkers = [
  {
    id: 'dove-on-tree',
    slug: 'dove',
    image: '/images/markers/dove.gif',
    x: 70,
    y: 19,
    size: 120,
    label: true
  },
  {
    id: 'hedgehog-next-to-bush',
    slug: 'hedgehog',
    image: '/images/markers/hedgehog.gif',
    x: 70,
    y: 60,
    size: 80,
    label: true
  },
  {
    id: 'waving-man-on-sidewalk',
    slug: 'wavingman',
    image: '/images/markers/wavingMan.gif',
    x: 34,
    y: 52,
    size: 60,
    label: true
  }
]
</script>