<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/bedroom-background.png"
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
    image: '/images/sides/TiredMan.gif',
    x: 54,
    y: 44.5,
    size: 700,
    label: false
  }
]
</script>