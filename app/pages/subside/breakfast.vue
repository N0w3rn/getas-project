<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/breakfast-background.jpg"
        :markers="doveMarker"
        fill-viewport
        background-color="#B5B4AF"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'man-breakfast',
    link: '/subside/car',
    image: '/images/sides/man-at-breakfast.webp',
    x: 71,
    y: 65.3,
    size: 170,
    label: false
  }
]
</script>