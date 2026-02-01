<template>
  <PageWrapper help-content="Tabea landet auf einem Gatter. Pflanzen wachsen rundherum und Kitzeln ihre Krallen. Von hier kann sie alles sehen…">
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
    image: '/images/sides/dove-sitting-fence.webp',
    x: 50,
    y: 16,
    size: 180,
    label: false
  }
]
</script>