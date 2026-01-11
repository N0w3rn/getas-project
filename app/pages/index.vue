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
    image: '/images/markers/dove.gif', // Passe den Pfad an!
    x: 70, // 25% von links
    y: 19, // 40% von oben
    size: 210, // 60px breit
    label: true // Zeigt Tooltip beim Hover
  },
  {
    id: 'hedgehog-next-to-bush',
    slug: 'hedgehog',
    image: '/images/markers/hedgehog.gif',
    x: 70,
    y: 60,
    size: 100,
    label: true
  }
  // Füge weitere Marker hinzu!
]
</script>