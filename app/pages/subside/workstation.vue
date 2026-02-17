<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/workstation-background.png"
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
    id: 'dove-crash-window',
    link: '/subside/dove-crash',
    image: '/images/sides/dove-window-crash-front.webp',
    x: 72,
    y: 52,
    size: 120,
    label: false,
    zIndex: 1
  },
  {
    id: 'man-working',
    link: '/subside/man-sleeping',
    image: '/images/sides/man-working.webp',
    x: 29,
    y: 27,
    size: 520,
    label: false,
    zIndex: 0
  }
]
</script>