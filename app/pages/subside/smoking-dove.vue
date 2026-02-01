<template>
  <PageWrapper help-content="Tauber pickt es vorsichtig an. Schnell fliegt sie wieder hoch auf das Gatter um es näher betrachten zu können. Das könnte gut für ein Nest sein!">
      <InteractiveImage 
        background-image="/images/bg/sign-background.jpg"
        :markers="doveMarker"
        fill-viewport
        background-color="#C8D4E4"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'smoking-dove',
    link: '/subside/dove-chill',
    image: '/images/sides/smoking-dove.webp',
    x: 50,
    y: 26,
    size: 300,
    label: false
  }
]
</script>