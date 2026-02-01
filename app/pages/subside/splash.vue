<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/splash-background.png"
          :markers="doveMarker"
          fill-viewport
          background-color="#FFFFFF"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'splash',
    link: '/subside/dove-hungry',
    image: '/images/sides/splash.webp',
    x: 54,
    y: 51,
    size: 120,
    label: false
  }
]
</script>