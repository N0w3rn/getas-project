<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/bedroom-background.png"
          :markers="doveMarker"
          fill-viewport
          background-color="#BAB1AA"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'man-in-bed',
    link: '/subside/smoking-man',
    image: '/images/sides/TiredMan.webp',
    x: 65,
    y: 38.4,
    size: 150,
    label: false
  }
]
</script>