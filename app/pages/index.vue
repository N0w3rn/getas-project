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
      <div>
        <FlyingWords />
      </div>

      <!-- Interaktive Karte -->
      <div>
        <InteractiveMap
          :background-image="mapBackground"
          :markers="mapMarkers"
          :map-height="600"
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
    id: 'marker-1',
    slug: 'location-1',
    image: '/images/markers/marker1.png', // Passe den Pfad an!
    x: 25, // 25% von links
    y: 40, // 40% von oben
    size: 60, // 60px breit
    label: true // Zeigt Tooltip beim Hover
  },
  {
    id: 'marker-2',
    slug: 'location-2',
    image: '/images/markers/marker2.png',
    x: 70,
    y: 30,
    size: 50,
    label: true
  }
  // Füge weitere Marker hinzu!
]
</script>