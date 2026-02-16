<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/workstation-background.png"
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
    link: '/subside/dove-crash',
    image: '/images/sides/dove-window-crash-front.webp',
    x: 72,
    y: 52,
    size: 120,
    label: false,
    zIndex: 1
  }
]
</script>