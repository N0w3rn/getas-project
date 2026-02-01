<template>
  <PageWrapper help-content="Mit dem Fund im Schnabel fliegt sie zurück zu ihrem Baum, um ihn in ihr Versteck zu bringen. Jetzt erstmal eine Pause…">
    <InteractiveImage 
      background-image="/images/bg/tree-background.jpg"
      :markers="doveMarker"
      fill-viewport
      background-color="#FFFFFF"
    />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-chill',
    link: '/subside/splash',
    image: '/images/sides/shitting-dove.webp',
    x: 54,
    y: 44.5,
    size: 200,
    label: false
  }
]
</script>