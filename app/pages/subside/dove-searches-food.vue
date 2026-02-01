<template>
  <PageWrapper :help-content="$t('dove.searchesFood.content')">
        <InteractiveImage 
          background-image="/images/bg/dove-searches-food-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#BCCDD7"
          :animate-image="false"
        />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-food-search',
    link: '/subside/bug-run-away',
    image: '/images/sides/dove-food-search.webp',
    x: 87.7,
    y: 73.5,
    size: 150,
    label: false
  }
]
</script>