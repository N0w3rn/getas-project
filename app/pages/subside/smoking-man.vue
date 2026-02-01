<template>
  <PageWrapper :help-content="$t('markers.smokingManDescription')">
      <InteractiveImage 
        background-image="/images/bg/scene-background.jpg"
        :markers="doveMarker"
        fill-viewport
        background-color="#B5B4AF"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'smoking-man',
    link: '/subside/breakfast',
    image: '/images/sides/smokingMan.webp',
    x: 54,
    y: 58,
    size: 170,
    label: false
  }
]
</script>