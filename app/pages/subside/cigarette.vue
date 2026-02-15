<template>
  <PageWrapper :help-content="$t('dove.cigaretteFind.helpContent')" :help-book-content="$t('dove.cigaretteFind.content')" :sources="sources">
      <InteractiveImage 
        background-image="/images/bg/cigarette-background.JPG"
        :markers="doveMarker"
        fill-viewport
        background-color="#8A8374"
      />
  </PageWrapper>
</template>

<script setup>
const sources = [
  'Erin Slaughter et al., “Cigarette Butts as Environmental Contaminants,” Tobacco Control 20, no. 1 (2011): i25–i29.'
]


const doveMarker = [
  {
    id: 'cigarette',
    link: '/subside/smoking-dove',
    image: '/images/sides/cigarette.webp',
    x: 50,
    y: 50,
    size: 600,
    label: false
  }
]
</script>