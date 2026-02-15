<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/dove-crashed-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#BCCDD7"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-crashed',
    link: '/subside/dove-hopping',
    image: '/images/sides/dove-crashed.gif',
    x: 64,
    y: 90,
    size: 200,
    label: false
  }
]
</script>