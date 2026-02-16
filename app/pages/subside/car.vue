<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/car-background.jpg"
        :markers="doveMarker"
        fill-viewport
        background-color="#B5B4AF"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'car',
    link: '/subside/workstation',
    image: '/images/sides/car.webp',
    x: 50,
    y: 35.4,
    size: 200,
    label: false
  },
  {
    id: 'hedgehog-scared',
    link: '/subside/hedgehog-firework',
    image: '/images/sides/hedgehog-scared.webp',
    x: 6,
    y: 78,
    size: 100,
    label: false
  }
]
</script>