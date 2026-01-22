<template>
  <PageWrapper>
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
    link: '/subside/dove-hungry',
    image: '/images/sides/hungry-dove.gif',
    x: 59,
    y: 33.5,
    size: 400,
    label: false
  }
]
</script>