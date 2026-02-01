<template>
  <PageWrapper :help-content="$t('dove.chill.content')">
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
    id: 'dove-chill',
    link: '/subside/splash',
    image: '/images/sides/shitting-dove.webp',
    x: 54,
    y: 44.5,
    size: 200,
    label: false
  }
]
</script>