<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/dove-hopping-background.jpg"
          :markers="doveMarker"
          :animate-image="false"
          fill-viewport
          background-color="#BCCDD7"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-hopping',
    link: '/subside/dove-in-nest',
    image: '/images/sides/dove-hopping.gif',
    x: 50,
    y: 60,
    size: 400,
    label: false
  }
]
</script>