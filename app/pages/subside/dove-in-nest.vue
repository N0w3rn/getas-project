<template>
  <PageWrapper :sources="sources" :help-book-content="$t('dove.nestDone.content')" :help-content="$t('dove.nestDone.helpContent')">
        <InteractiveImage 
          background-image="/images/bg/dove-nest-background.jpg"
          :markers="doveMarker"
          fill-viewport
          background-color="#BCCDD7"
        />
  </PageWrapper>
</template>

<script setup>
const sources = [
  'A. K. Townsend et al., “Nest Building in the Anthropocene,” Science 364, no. 6446 (2019): 1308–1310; Anna Lowenhaupt Tsing et al., Arts of Living on a Damaged Planet (Minneapolis: University of Minnesota Press, 2017), 1–14.'
]

const doveMarker = [
  {
    id: 'dove-in-nest',
    link: '/main-scene',
    image: '/images/sides/dove-in-nest.gif',
    x: 50,
    y: 60,
    size: 200,
    label: false
  }
]
</script>