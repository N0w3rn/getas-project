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
    id: 'dove-hungry',
    link: '/subside/dove-searches-food',
    image: '/images/sides/hungry-dove.webp',
    x: 59,
    y: 32,
    size: 300,
    label: false
  }
]
</script>