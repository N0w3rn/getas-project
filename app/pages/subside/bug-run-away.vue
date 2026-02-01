<template>
  <PageWrapper>
        <InteractiveImage 
          background-image="/images/bg/bug-run-away-background.jpg"
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
    id: 'bug-run-away',
    link: '/subside/dove-stuck',
    image: '/images/sides/bug-run-away.gif',
    x: 47,
    y: 64.9,
    size: 380,
    label: false
  }
]
</script>