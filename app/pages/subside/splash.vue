<template>
  <PageWrapper :help-content="$t('dove.splash.content')">
        <InteractiveImage 
          background-image="/images/bg/splash-background.png"
          :markers="doveMarker"
          fill-viewport
          background-color="#FFFFFF"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'splash',
    link: '/subside/dove-hungry',
    image: '/images/sides/splash.webp',
    x: 54,
    y: 51,
    size: 120,
    label: false
  },
  {
    id: 'scented-tree',
    link: '/subside/car',
    image: '/images/sides/scented-tree.webp',
    x: 37,
    y: 78,
    size: 20,
    label: false
  }
]
</script>