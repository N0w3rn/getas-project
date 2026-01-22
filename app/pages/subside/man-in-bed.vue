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
    id: 'dove-chill',
    link: '/subside/man-in-bed',
    image: '/images/sides/TiredMan.gif',
    x: 69,
    y: 37.6,
    size: 150,
    label: false
  }
]
</script>