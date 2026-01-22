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
      
      <InteractiveImage 
        :background-image="sceneBackground"
        :markers="sceneMarkers"
      />

      <InitialModal 
        v-model="showModal"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { showModal, checkAndShowModal, closeModal } = useWelcomeModal(15)

const sceneBackground = '/images/bg/map.jpg'

const sceneMarkers = [
  {
    id: 'main-scene-marker',
    link: 'main-scene',
    image: '/images/markers/marker-plan1.gif',
    x: 36,
    y: 25,
    size: 40,
    label: true
  }
]

onMounted(() => {
  checkAndShowModal()
})
</script>