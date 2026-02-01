<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/hedgehog-night-walk-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#525252"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'hedgehog-night-walk',
    link: '/subside/hedgehog-night-walk',
    image: '/images/sides/hedgehog-night-walk.gif',
    x: 53,
    y: 70,
    size: 240,
    label: false
  }
]
</script>