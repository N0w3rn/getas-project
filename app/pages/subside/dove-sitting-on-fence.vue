<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/scene2-background.jpg"
        :markers="doveMarker"
        fill-viewport
        background-color="#5B9647"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-on-fence',
    link: '/subside/dove-chill',
    image: '/images/markers/dove.gif',
    x: 50,
    y: 20,
    size: 270,
    label: false
  }
]
</script>