<template>
  <PageWrapper :sources="sources" :help-book-content="$t('dove.crash.content')" :help-content="$t('dove.crash.helpContent')">
        <InteractiveImage 
          background-image="/images/bg/dove-crashed-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#BCCDD7"
        />
  </PageWrapper>
</template>

<script setup>
const sources = [
  'Daniel Klem Jr., “Window Collisions,” Bird Observer 18, no. 2 (1990): 90–101.'
]

const doveMarker = [
  {
    id: 'dove-crashed',
    link: '/subside/dove-hopping',
    image: '/images/sides/dove-crashed.gif',
    x: 64,
    y: 90,
    size: 200,
    label: false
  }
]
</script>