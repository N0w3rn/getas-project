<template>
  <PageWrapper
    :help-content="$t('hedgehog.maggots.content')"
    :sources="sources"
  >
    <InteractiveImage 
      background-image="/images/bg/maggots-background.jpg"
      :markers="doveMarker"
      fill-viewport
      background-color="#525252"
    />
  </PageWrapper>
</template>

<script setup>
const sources = [
  '„Biologie des Igels - Igelschutz-Interessengemeinschaft e.V.“, zugegriffen 1. Februar 2026, https://www.igelschutz-ev.de/live/Biologie-des-Igels/biologie-igel.aspx.'
]

const doveMarker = [
  {
    id: 'maggots',
    link: '/subside/hedgehog-day-walking',
    image: '/images/sides/maggots.webp',
    x: 38,
    y: 70,
    size: 400,
    label: false
  }
]
</script>