<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/Hedgehog-Walking-Background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#1B2233"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'hedgehog-walking',
    link: '/subside/hedgehog-drinking',
    image: '/images/sides/Hedgehog-Walking.gif',
    x: 50,
    y: 75,
    size: 600,
    label: false
  }
]
</script>