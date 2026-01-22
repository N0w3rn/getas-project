<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <div class="my-12">
        <div>
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
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { showModal, checkAndShowModal, closeModal } = useWelcomeModal(15)

const sceneBackground = '/images/bg/map.jpg'

const sceneMarkers = [
  {
    id: 'main-scene-marker',
    link: '/main-scene',
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