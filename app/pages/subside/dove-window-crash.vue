<template>
  <PageWrapper :help-book-content="$t('dove.windowCrash.content')">
        <InteractiveImage 
          background-image="/images/bg/dove-window-crash-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#BCCDD7"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-window-crash',
    link: '/subside/dove-crash',
    image: '/images/sides/dove-window-crash.webp',
    x: 40,
    y: 26,
    size: 300,
    label: false
  }
]
</script>