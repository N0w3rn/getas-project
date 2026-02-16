<template>
  <PageWrapper
    :help-content="$t('hedgehog.scared.content')"
    :sources="sources"
  >
    <InteractiveImage 
      background-image="/images/bg/car-background.jpg"
      :markers="doveMarker"
      :animate-image="false"
      fill-viewport
      background-color="#525252"
    />
  </PageWrapper>
</template>

<script setup>
const sources = [
  '„Igel: Stachelige Stadtbewohner“, Deutsche Wildtier Stiftung, o. J., zugegriffen 31. Januar 2026, https://www.deutschewildtierstiftung.de/wildtiere/igel.'
]

const doveMarker = [
  {
    id: 'hedgehog-scared',
    link: '/subside/hedgehog-firework',
    image: '/images/sides/hedgehog-scared.webp',
    x: 6,
    y: 78,
    size: 100,
    label: false
  },
  {
    id: 'car',
    link: '/subside/workstation',
    image: '/images/sides/car.webp',
    x: 50,
    y: 35.4,
    size: 200,
    label: false
  }
]
</script>