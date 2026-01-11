<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-6xl mx-auto space-y-8">
      
      <!-- Willkommens-Bereich -->
      <div class="bg-white rounded-lg shadow-xl p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          {{ $t('welcome') }}
        </h1>
        <p class="text-gray-600 text-lg">
          {{ $t('description') }}
        </p>
      </div>

      <!-- Fliegende Wörter Komponente -->
      <div class="relative w-full bg-white rounded-lg shadow-lg overflow-hidden p-6 font-semibold">
        <!-- <FlyingWords /> -->
        {{ $t('indexPageTextBlock1') }}
      </div>

      <!-- Interaktive Karte -->
      <div class="h-40">
        <InteractiveMap
          :background-image="mapBackground"
          :markers="mapMarkers"
          :map-height="2000"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
// Map Konfiguration
const mapBackground = '/images/map-background.jpg' // Passe den Pfad an!

// Marker Konfiguration
// x und y sind in Prozent (0-100)
// size ist in Pixeln
const mapMarkers = [
  {
    id: 'dove-on-tree',
    slug: 'dove',
    image: '/images/markers/dove.gif',
    x: 70,
    y: 19,
    size: 210,
    label: true,
    scaleCompensation: 0.4 // Standard
  },
  {
    id: 'hedgehog-next-to-bush',
    slug: 'hedgehog',
    image: '/images/markers/hedgehog.gif',
    x: 70,
    y: 60,
    size: 130,
    label: true,
    scaleCompensation: 0.4 // Standard
  },
  {
    id: 'waving-man-on-sidewalk',
    slug: 'wavingman',
    image: '/images/markers/wavingMan.gif',
    x: 34,
    y: 52,
    size: 90,
    label: true,
    scaleCompensation: 0 // ← HÖHER für mehr Konstanz!
  }
]
</script>