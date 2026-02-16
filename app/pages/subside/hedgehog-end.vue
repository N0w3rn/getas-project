<template>
  <PageWrapper
    :help-book-content="$t('hedgehog.end.content')"
  >
    <InteractiveImage 
      background-image="/images/sides/hedgehog-end.webp"
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
    id: 'hedgehog-end',
    link: '/main-scene',
    image: '/images/sides/hedgehog-end.webp',
    x: 50,
    y: 50,
    size: 600,
    label: false
  }
]
</script>