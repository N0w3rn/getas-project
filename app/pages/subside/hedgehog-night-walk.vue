<template>
  <PageWrapper
    :help-content="$t('hedgehog.nightWalk.content')"
    :sources="sources"
    :close-button-text="$t('continue')"
  >
    <InteractiveImage 
      background-image="/images/bg/hedgehog-night-walk-background.jpg"
      :markers="doveMarker"
      fill-viewport
      background-color="#525252"
    />
  </PageWrapper>
</template>

<script setup>
const sources = [
  '„Biologie des Igels - Igelschutz-Interessengemeinschaft e.V.", zugegriffen 1. Februar 2026, https://www.igelschutz-ev.de/live/Biologie-des-Igels/biologie-igel.aspx'
]

const doveMarker = [
  {
    id: 'hedgehog-night-walk',
    link: '/subside/hedgehog-night-walk',
    image: '/images/sides/hedgehog-night-walk.webp',
    x: 53,
    y: 70,
    size: 240,
    label: false
  }
]
</script>