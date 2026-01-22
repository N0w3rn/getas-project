<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/tree-background.jpg"
          :markers="doveMarker"
          fill-viewport
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-chill',
    link: '/subside/splash',
    image: '/images/sides/shitting-dove.gif',
    x: 54,
    y: 44.5,
    size: 200,
    label: false
  }
]
</script>