<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/dove-nest-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#BCCDD7"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-in-nest',
    link: '/subside/dove-in-nest',
    image: '/images/sides/dove-in-nest.gif',
    x: 50,
    y: 60,
    size: 200,
    label: false
  }
]
</script>