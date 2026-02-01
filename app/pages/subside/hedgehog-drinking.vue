<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/hedgehog-drinking-background.jpg"
          :markers="doveMarker"
          :animate-image="false"
          fill-viewport
          background-color="#525252"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'hedgehog-drinking',
    link: '/subside/hedgehog-night-walk',
    image: '/images/sides/hedgehog-drinking.gif',
    x: 50,
    y: 50,
    size: 600,
    label: false
  }
]
</script>