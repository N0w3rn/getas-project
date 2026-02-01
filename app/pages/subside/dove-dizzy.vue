<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/dove-dizzy-background.jpg"
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
    id: 'dove-dizzy',
    link: '/subside/dove-dizzy-fly',
    image: '/images/sides/dove-dizzy.gif',
    x: 50,
    y: 70,
    size: 560,
    label: false
  }
]
</script>