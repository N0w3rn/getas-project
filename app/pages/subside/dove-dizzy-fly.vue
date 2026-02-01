<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/dove-dizzy-fly-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#6DACDF"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-dizzy-fly',
    link: '/subside/dove-dizzy-fly',
    image: '/images/sides/dove-dizzy-fly.gif',
    x: 50,
    y: 50,
    size: 560,
    label: false
  }
]
</script>