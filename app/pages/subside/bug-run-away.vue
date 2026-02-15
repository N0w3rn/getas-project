<template>
  <PageWrapper
    :help-content="$t('dove.bugRunAway.helpContent')"
    :help-book-content="$t('dove.bugRunAway.content')"
    :sources="sources"
  >
    <InteractiveImage 
      background-image="/images/bg/bug-run-away-background.jpg"
      :markers="doveMarker"
      :animate-image="false"
      fill-viewport
      background-color="#6D7649"
    />
  </PageWrapper>
</template>

<script setup>
const sources = [
  'Colin Jerolmack, The Global Pigeon (Chicago: University of Chicago Press, 2013), 87–89; Robert J. Robertson and Richard L. Hutto, “A Framework for Understanding Ecological Traps,” Ecology 87, no. 5 (2006): 1071–1085.'
]


const doveMarker = [
  {
    id: 'bug-run-away',
    link: '/subside/dove-stuck',
    image: '/images/sides/bug-run-away.webp',
    x: 47,
    y: 64.9,
    size: 380,
    label: false
  }
]
</script>