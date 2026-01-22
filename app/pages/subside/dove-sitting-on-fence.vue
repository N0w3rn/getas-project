<template>
  <PageWrapper>
      <InteractiveImage 
        background-image="/images/bg/scene2-background.jpg"
        :markers="doveMarker"
        fill-viewport
        background-color="#FFFFFF"
      />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-on-fence',
    link: '/subside/cigarette',
    image: '/images/sides/dove-sitting-fence.gif',
    x: 50,
    y: 16,
    size: 650,
    label: false
  }
]
</script>