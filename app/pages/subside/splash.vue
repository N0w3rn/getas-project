<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/splash-background.png"
          :markers="doveMarker"
          fill-viewport
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-chill',
    link: '/subside/...',
    image: '/images/sides/splash.gif',
    x: 54,
    y: 51,
    size: 120,
    label: false
  }
]
</script>