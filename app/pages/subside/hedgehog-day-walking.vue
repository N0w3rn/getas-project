<template>
  <PageWrapper
    :help-content="$t('hedgehog.dayWalking.content')"
    :sources="sources"
  >
    <InteractiveImage 
      background-image="/images/bg/hedgehog-day-walking-background.jpg"
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
    id: 'hedgehog-day-walking',
    link: '/subside/hedgehog-scared',
    image: '/images/sides/hedgehog-day-walking.webp',
    x: 24,
    y: 72,
    size: 300,
    label: false
  }
]
</script>