<template>
  <PageWrapper :help-content="$t('dove.stuck.content')">
        <InteractiveImage 
          background-image="/images/bg/dove-stuck-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#837170"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-stuck',
    link: '/subside/dove-dizzy',
    image: '/images/sides/dove-stuck.webp',
    x: 64.2,
    y: 73.4,
    size: 300,
    label: false
  }
]
</script>