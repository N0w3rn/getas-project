<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/trash-throw-background.png"
        :markers="doveMarker"
        fill-viewport
        background-color="#B5B4AF"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'trash-throw',
    link: '/subside/car',
    image: '/images/sides/trash-throw.webp',
    x: 42,
    y: 40,
    size: 500,
    label: false
  }
]
</script>