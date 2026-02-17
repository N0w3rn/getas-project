<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/man-sleeping-background.png"
        :markers="doveMarker"
        fill-viewport
        :animate-image="false"
        background-color="#B5B4AF"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'man-sleeping',
    link: '/main-scene',
    image: '/images/sides/man-sleeping.webp',
    x: 54,
    y: 37,
    size: 180,
    label: false,
    zIndex: 1
  }
]
</script>