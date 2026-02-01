<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/cigarette-background.JPG"
        :markers="doveMarker"
        fill-viewport
        background-color="#8A8374"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'cigarette',
    link: '/subside/smoking-dove',
    image: '/images/sides/cigarette.webp',
    x: 50,
    y: 50,
    size: 600,
    label: false
  }
]
</script>